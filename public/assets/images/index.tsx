import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { t } from "i18next";
import { useState, useEffect } from "react";



export default function TestimonialCarousel() {
  const { t } = useTranslation();

  const comments = [
    {
      id: 1,
      auteur: "Jean Dupont",
      text: t('carossel.temoins1')

    },
    {
      id: 2,
      auteur: "Marie Curie",
      text: t('carossel.temoins2'),
    
    },
    {
      id: 3,
      auteur: "Albert Einstein",
      text:t('carossel.temoins3'),
    
    },
    {
      id: 4,
      auteur: "John doe",
      text: t('carossel.temoins4'),
      
    },
    {
      id: 5,
      auteur: "Michelle Curie",
      text: t('carossel.temoins5'),
      backgroundColor: "bg-[#2ea043]", // Green
    },
    {
      id: 6,
      auteur: "Albert johnathan",
      text: t('carossel.temoins6'),
      
    },
    
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setVisibleCards(3);
      } else if (window.innerWidth > 768) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const colors = ["bg-[#134888]", "bg-[#2AC100]", "bg-black"];
  const textColors = ["text-white", "text-black", "text-white"];

  const handleNext = () => {
    if (currentIndex < comments.length - visibleCards) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart !== null && touchEnd !== null) {
      const swipeDistance = touchStart - touchEnd;
      if (swipeDistance > 50) {
        handleNext();
      } else if (swipeDistance < -50) {
        handlePrev();
      }
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div
      className="px-5 lg:px-16 md:flex justify-center items-center gap-8"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex mb-4 flex-col items-start 
      justify-center md:w-80 "
      >
        <h1
          className="font-bold text-blue-primary text-3xl
        md:text-left text-center mb-2"
        >
          {t("carossel.titreHero")}
        </h1>
        <div className="flex  gap-8">
          {/* Boutons de navigation */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`left-0 top-1/2 hidden md:block h-16 w-16 rounded-full ${
              currentIndex === 0
                ? "cursor-not-allowed bg-[#CECECE]"
                : "bg-blue-primary"
            }`}
          >
            <img
              src={`${
                currentIndex === 0
                  ? "/assets/images/vecteurs/arrow-left.svg"
                  : "/assets/images/vecteurs/arrow-left-white.svg"
              }`}
              alt="arrow"
              className="w-10 mx-auto"
            />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex >= comments.length - visibleCards}
            className={`hidden md:block h-16 w-16 rounded-full ${
              currentIndex >= comments.length - visibleCards
                ? "bg-[#CECECE] cursor-not-allowed"
                : "bg-blue-primary"
            }`}
          >
            <img
              src={`${
                currentIndex >= comments.length - visibleCards
                  ? "/assets/images/vecteurs/arrow-right.svg"
                  : "/assets/images/vecteurs/arrow-right-white.svg"
              }`}
              alt="arrow"
              className="w-10 mx-auto"
            />
          </button>
        </div>
      </div>

      {/* Carrousel */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
          }}
        >
          {comments.map((comment, index) => (
            <div
              key={comment.id}
              className={`flex-shrink-0 p-4 py-10 rounded-lg mx-2 text-center ${
                colors[index % colors.length]
              }   ${textColors[index % textColors.length]} `}
              style={{
                width: `${95 / visibleCards}%`,
              }}
            >
              <h1 className="mb-4 font-bold text-xl">{comment.auteur}</h1>
              <p className="font-medium ">{comment.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Indicateurs de navigation pour mobile */}
      <div className="flex justify-center mt-4 md:hidden">
        {comments.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full mx-1 ${
              currentIndex === index ? "bg-blue-primary px-4" : "bg-[#CECECE]"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};



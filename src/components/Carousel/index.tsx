import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function TestimonialCarousel() {
  const comments = [
    {
      id: 1,
      auteur: "Jean Dupont",
      text: "carossel.temoins1",
    },
    {
      id: 2,
      auteur: "Marie Curie",
      text: "carossel.temoins2",
    },
    {
      id: 3,
      auteur: "Albert Einstein",
      text: "carossel.temoins3",
    },
    {
      id: 4,
      auteur: "John Doe",
      text: "carossel.temoins4",
    },
    {
      id: 5,
      auteur: "Michelle Curie",
      text: "carossel.temoins5",
      backgroundColor: "bg-[#2ea043]", // Green
    },
    {
      id: 6,
      auteur: "Albert Jonathan",
      text: "carossel.temoins6",
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

  const colors = ["bg-[#F87501]", "bg-[#2AC100]", "bg-black"];
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
      className="px-4 lg:px-24 md:flex justify-center items-center gap-8 my-14"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex mb-4 flex-col items-center md:items-start 
      justify-center md:w-80"
      >
        <h1
          className="font-bold text-4xl 
        md:text-left text-center mb-7"
        >
          Que disent les parents
        </h1>
        <div className="flex gap-8">
          {/* Boutons de navigation */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`flex items-center justify-center h-16 w-16 rounded-full shadow-md border ${
              currentIndex === 0
                ? " bg-[#E5E5E5] text-black" // Inactif
                : "bg-blue text-white" // Actif
            }`}
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex >= comments.length - visibleCards}
            className={`flex items-center justify-center h-16 w-16 rounded-full shadow-md border ${
              currentIndex >= comments.length - visibleCards
                ? " bg-[#E5E5E5] text-black" // Inactif
                : "bg-blue text-white" // Actif
            }`}
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>
      </div>

      {/* Carrousel */}
      <div className="flex overflow-hidden border border-red-600" >
        <div
          className="flex transition-transform duration-300 gap-3 border-4 border-green-600"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
          }}
        >
          {comments.map((comment, index) => (
            <div
              key={comment.id}
              className={`flex-shrink-0 p-4 py-14 rounded-lg text-center ${
                colors[index % colors.length]
              } ${textColors[index % textColors.length]}`}
              style={{
                width: visibleCards === 1 ? "100%" : `${95 / visibleCards}%`, // Prend 100% sur mobile
              }}
            >
              <h1 className="mb-4 font-bold text-xl">{comment.auteur}</h1>
              <p className="font-medium">{comment.text}</p>
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
}

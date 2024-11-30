import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
interface Slide {
  id: number;
  title: string;
  content: string;
  backgroundColor: string;
}



export default function TestimonialCarousel() {

  const slides: Slide[] = [
    {
      id: 1,
      title: "Jean Dupont",
      content: "otot",
      backgroundColor: "bg-blue", // Blue
    },
    {
      id: 2,
      title: "Marie Curie",
      content: "toto1",
      backgroundColor: "bg-black", // Green
    },
    {
      id: 3,
      title: "Albert Einstein",
      content:"totot3",
      backgroundColor: "bg-[#1e4d91]", // Black
    },
    {
      id: 4,
      title: "John doe",
      content: "totot3",
      backgroundColor: "bg-black", // Blue
    },
    {
      id: 5,
      title: "Michelle Curie",
      content: "totot3",
      backgroundColor: "bg-blue", // Green
    },
    {
      id: 6,
      title: "Albert johnathan",
      content:"totot3",
      backgroundColor: "bg-black", // Black
    },
    
  ];

  const [currentSlide, setCurrentSlide] = React.useState(0);

 
  const slideRef = React.useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Calculate the width of a single slide dynamically
  const getSlideWidth = (): number => {
    if (slideRef.current) {
      return slideRef.current.offsetWidth;
    }
    return 0;
  };

  return (
    <div className="min-h-auto bg-white px-4 py-8 md:px-6 lg:px-32">
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row lg:items-center lg:justify-center rounded-2xl" >
        {/* Title Section */}
        <div className="mb-2 lg:mb-1 lg:w-1/4">
          <h2 className="hidden lg:block lg:w-[75%] text-left text-[2rem] font-bold leading-tight text-[#1e4d91] font-raleway">
         Que disent les parents de l'application EyesOn
          </h2>

          <h2 className="text-center lg:hidden lg:text-left  text-[2rem] font-bold leading-tight text-[#1e4d91] font-raleway">
          {"tototo"}
          </h2>


          {/* Buttons */}
          <div className="mt-1 flex items-center gap-4 justify-center lg:justify-start">
            <button
              onClick={prevSlide}
              className="flex h-12 w-12 items-center justify-center font-raleway rounded-full bg-[#E5E7EB] transition-colors hover:bg-gray-300"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5 text-black" />
            </button>
            <button
              onClick={nextSlide}
              className="flex h-12 w-12 items-center font-raleway justify-center rounded-full bg-blue text-white transition-colors hover:bg-blue-700"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="relative lg:w-3/4 mt-1">
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${currentSlide * getSlideWidth()}px)`,
              }}
            >
              {slides.map((slide) => (
                <div
                  key={slide.id}
                  ref={currentSlide === slide.id - 1 ? slideRef : null} // Reference for the active slide
                  className="w-full sm:w-[70%] md:w-[50%] lg:w-[40%] flex-shrink-0 px-2"
                >
                  <div
                    className={`${slide.backgroundColor} rounded-3xl p-6 text-white flex flex-col justify-center items-center`}
                    style={{
                      minHeight: "18rem",
                      maxHeight: "18rem",
                    }}
                  >
                    <h3 className="mb-3 text-lg font-semibold text-center font-raleway">{slide.title}</h3>
                    <p className="text-base text-center font-raleway">{slide.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

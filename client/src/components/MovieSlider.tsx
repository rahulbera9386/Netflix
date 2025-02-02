import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MovieSlider = ({ item }) => {
  const [showArrows, setShowArrows] = useState(false);
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 500; // Adjust scroll distance as needed
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 500;
    }
  };

  return (
    <div
      className="bg-black text-white relative px-5 md:px-20"
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
    >
      <div className="flex space-x-4 overflow-x-hidden scroll-smooth " ref={sliderRef}>
        {item.map((movie) => (
          <Link
            to={movie.url}
            className="min-w-[250px] relative group"
            key={movie.id}
          >
            <div className="rounded-lg overflow-hidden ">
              <img
                src={movie.primaryImage}
                alt="Movie image"
                className="transition-transform duration-300 ease-in-out group-hover:scale-125 w-48 h-64 "
              />
            </div>
            <p className="mt-2 text-center">{movie.title || movie.name}</p>
          </Link>
        ))}
      </div>

      {showArrows && (
        <>
          <button
            className="absolute top-1/2 -translate-y-1/2 left-5 md:left-24 flex items-center justify-center
                       w-12 h-12 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white z-10"
            onClick={scrollLeft}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            className="absolute top-1/2 -translate-y-1/2 right-5 md:right-24 flex items-center justify-center
                       w-12 h-12 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white z-10"
            onClick={scrollRight}
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}
    </div>
  );
};

export default MovieSlider;

import React, { useState } from 'react';
import CarouselItem from './CarouselItem';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Carousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };
    const goToSlide = (index) => {
        setCurrentIndex(index);
      };
  
    return (
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out "
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <CarouselItem item={item} />
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-background/80 p-2 rounded-full shadow-md"
        >
          <FaArrowLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-background/80 p-2 rounded-full shadow-md"
        >
          <FaArrowRight className="w-6 h-6" />
        </button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-primary' : 'bg-background'
            }`}
          />
        ))}
      </div>
      </div>
    );
  };
  
  export default Carousel;



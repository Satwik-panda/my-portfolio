// Carousel.js
import React, { useState, useRef, useEffect } from 'react';

const ImageSlider = ({ img = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % img.length);
  };

  // Function to start the auto-slide
  const startSlide = () => {
    intervalRef.current = setInterval(nextSlide, 5000); // Change slide every 5 seconds
  };

  // Function to stop the auto-slide
  const stopSlide = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    if (img.length > 1) {
      startSlide();
      return () => stopSlide();
    }
  }, [img.length]);

  if (img.length === 0) {
    return <div>No images to display</div>;
  }

  return (
    <div
      className="relative w-full aspect-[2.19/1] overflow-hidden"
      onMouseEnter={stopSlide}
      onMouseLeave={startSlide}
    >
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {img.map((src, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img src={src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      {img.length > 1 && (
        <>
          <button
            className="absolute left-4 md:left-6 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 md:p-3 lg:p-4 rounded-full opacity-75 hover:opacity-100 focus:outline-none"
            onClick={() => setCurrentIndex((prevIndex) => (prevIndex === 0 ? img.length - 1 : prevIndex - 1))}
          >
            &#9664;
          </button>
          <button
            className="absolute right-4 md:right-6 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 md:p-3 lg:p-4 rounded-full opacity-75 hover:opacity-100 focus:outline-none"
            onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % img.length)}
          >
            &#9654;
          </button>
        </>
      )}
    </div>
  );
};

export default ImageSlider;


// export default Carousel;


// function ImageSlider({ img }) {
//   const [images, setImages] = useState(img);
//   const [currentImageSlide, setSlide] = useState(0);

//   function handleNext() {
//     setSlide(currentImageSlide === images.length - 1 ? 0 : currentImageSlide + 1);
//   }

//   function handlePrevious() {
//     setSlide(currentImageSlide === 0 ? images.length - 1 : currentImageSlide - 1);
//   }

//   return (
//     <div id="default-carousel" className="relative w-full p-1 md:outline outline-slate-500 rounded-2xl" data-carousel="slide">
//       <div className="relative h-56 overflow-hidden rounded-lg lg:h-96">
//         {images.map((e, indx) => (
//           <div
//             className={`duration-700 ease-in-out ${indx === currentImageSlide ? 'block' : 'hidden'}`}
//             data-carousel-item
//             key={indx}
//           >
//             <img
//               src={e}
//               className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//               alt=""
//             />
//           </div>
//         ))}
//       </div>
//       {
//         images.length>1?<>
//         <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
//         {images.map((_, indx) => (
//           <button
//             type="button"
//             className={`w-3 h-3 rounded-full ${indx === currentImageSlide ? 'bg-white' : 'bg-gray-300'}`}
//             aria-current={indx === currentImageSlide}
//             data-carousel-slide-to={indx}
//             key={indx}
//           ></button>
//         ))}
//       </div>
//         <button
//         type="button"
//         className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//         data-carousel-prev
//         onClick={handlePrevious}
//       >
//         <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//           <svg
//             className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 6 10"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M5 1 1 5l4 4"
//             />
//           </svg>
//           <span className="sr-only">Previous</span>
//         </span>
//       </button>
//       <button
//         type="button"
//         className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//         data-carousel-next
//         onClick={handleNext}
//       >
//         <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//           <svg
//             className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 6 10"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="m1 9 4-4-4-4"
//             />
//           </svg>
//           <span className="sr-only">Next</span>
//         </span>
//       </button>
//         </> :null
//       }
      
//     </div>
//   );
// }


    //     <div className="image-component w-5/6 h-1/2 ">
    //     <div className="image-container ">
    //         {images.length >1 ?
    //             <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left"/>:
    //             null}
    //         {images.map((element,indx)=>{
    //             return(
    //                 <img 
    //                 className={
    //                     currentImageSlide===indx?
    //                     "current-photo":
    //                     "current-photo hide-photo"
    //                 }
    //                 key={indx} 
    //                 src={element}
    //                 />)
    //         })}
    //         {images.length > 1 ?
    //         <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right"/>:
    //         null}
    //         <span className="dot-indicator">
    //             {
    //                 images && images.length > 1 ?
    //                 images.map((_,indx)=>(<button
    //                     key={indx} 
    //                     onClick={()=>setSlide(indx)}
    //                     className={
    //                         currentImageSlide===indx?
    //                         "current-indicator":
    //                         "current-indicator inactive-indicator"
    //                     }>
    //                 </button>)): null
    //             }
    //         </span>
    //     </div>
    //     </div>
    
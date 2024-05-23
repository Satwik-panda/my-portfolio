import React, { useEffect, useRef } from "react";
// import gradSVG from '..experience/student-boy-icon.'; 
function Experience() {

  const headingRef = useRef(null);

  useEffect(() => {
    const parentDiv = document.querySelector(".experience-container"); // Assuming the parent div has the 'container' class

    const handleScroll = () => {
      const parentRect = parentDiv.getBoundingClientRect();
      const parentTop = parentRect.top;
      const windowHeight = window.innerHeight;
      const parentHeight = parentRect.height;
      
      // Calculate the scroll progress within the parent div
      const scrollProgress = Math.max(0, Math.min(1, (windowHeight - parentTop) / (windowHeight + parentHeight)));

      if (headingRef.current) {
        const headingElement = headingRef.current;
        // Adjust the translate value based on the scroll progress
        const translateValue = `translateX(${(1 - scrollProgress) * 100 - 60}%)`;
        headingElement.style.transform = translateValue;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="experience-container relative flex justify-center items-center flex-col h-auto min-h-screen py-12 md:py-16 lg:py-24 md-10 overflow-hidden">
    <h1
      ref={headingRef}
      className="text-[5rem] lg:text-[8rem] xl:text-[13rem] text-center absolute top-3 z-0 tracking-tight text-gray-200 font-bold 
          transition-transform duration-100 ease-out font-['Helvetica'] ">
      MY EXPERIENCE
    </h1>

  <div className="data-container rounded-xl flex flex-col items-center md:flex-row bg-[#f8ebd4] relative z-1 top-[8rem] md:top-[4rem]
  w-[90%] p-5 md:p-7 lg:p-12 
  hover:scale-105 shadow-xl hover:shadow-2xl transition-all duration-500 ">

    <ol className="relative border-l-4 border-gray-700 pl-5 w-full">
      <li className="mb-10 ml-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-slate-100 rounded-full -left-3 ring-8 ring-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/>
          </svg>
        </span>
        <h3 className="flex items-center mb-1 text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-900">
          Frontend Developer at TCS
        </h3>
        <time className="block mb-2 font-normal leading-none text-gray-400 dark:text-gray-500">
          2022 - Present
        </time>
        <p className="mb-4 font-normal text-gray-500 dark:text-gray-400">
          <span className="block">My Responsibilities were:</span>
          <span className="block">1. Spearheaded the development of numerous innovative modules to enhance project functionality, including the creation of a dynamic accordion menu component. This versatile component allowed users to select various options and seamlessly submit data to the backend for processing, significantly improving user interaction and data management.</span>
          <span className="block">2. Utilized the Chart.js library to design and implement an interactive bar graph feature for the admin page. Leveraging advanced visualization techniques, the bar graph provided administrators with valuable insights and data visualization capabilities to make informed decisions and track project performance effectively.</span>
          <span className="block">3. Enhanced existing modules with modern UI enhancements, including animations and transitions, to elevate the user experience.</span>
          <span className="block">4. Designed specialized components like a copy button for seamless data transfer and a delete button with dynamic animations.</span>
          <span className="block">5. Played a pivotal role in refactoring frontend codebase across multiple modules, optimizing code structure and improving maintainability. Implemented best practices and coding standards to enhance scalability, performance, and code readability, resulting in a more robust and efficient application architecture.</span>
        </p>
      </li>
      <li className="ml-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-slate-100 rounded-full -left-3 ring-8 ring-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M219.3 .5c3.1-.6 6.3-.6 9.4 0l200 40C439.9 42.7 448 52.6 448 64s-8.1 21.3-19.3 23.5L352 102.9V160c0 70.7-57.3 128-128 128s-128-57.3-128-128V102.9L48 93.3v65.1l15.7 78.4c.9 4.7-.3 9.6-3.3 13.3s-7.6 5.9-12.4 5.9H16c-4.8 0-9.3-2.1-12.4-5.9s-4.3-8.6-3.3-13.3L16 158.4V86.6C6.5 83.3 0 74.3 0 64C0 52.6 8.1 42.7 19.3 40.5l200-40zM111.9 327.7c10.5-3.4 21.8 .4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5C401 348.6 448 409.4 448 481.3c0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6z"/>
          </svg>
        </span>
        <h3 className="mb-1 font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-900">
          Graduated From SRM University
        </h3>
        <time className="block mb-2 font-normal leading-none text-gray-400 dark:text-gray-500">
          2018 - 2022
        </time>
        <p className=" font-normal text-gray-500 dark:text-gray-400">
          Bachelor of Technology in EEE, but my curiosity and interest pulled me towards coding.
        </p>
      </li>
    </ol>
  </div>
</div>

  );
}

export default Experience;

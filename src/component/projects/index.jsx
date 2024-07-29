import { useEffect, useRef, useState } from "react";
import Description from "./description";
import project_details from "./projects_details";
// import Visual from "./visual";
import ImageSlider from "../ImageSlider";

function Projects() {
  const [isHovered, setIsHovered] = useState(false);

  const headingRef = useRef(null);

  useEffect(() => {
    const parentDiv = document.querySelector("#Project"); // Assuming the parent div has the 'container' class

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
        const translateValue = `translateX(${(1 - scrollProgress) * 100 - 70}%)`;
        headingElement.style.transform = translateValue;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="Project" className="flex h-auto relative flex-col  overflow-clip">
      <h1
        ref={headingRef}
        className="text-[7rem] md:text-[10rem] lg:text-[13rem] text-center  tracking-tight text-gray-200 font-bold 
        transition-transform duration-100 ease-out font-['Helvetica'] "
      >
        PROJECTS
      </h1>
      <hr class="w-full h-1 border-t-0 bg-transparent bg-gradient-to-r from-transparent via-black to-transparent opacity-100" />
    

      {project_details.map((project, index) => (
        <div key={project.id} className="relative z-10 flex flex-col space-y-4">
          <h1
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold flex items-center justify-center my-4 animate-fadeInDown"
          >
            {project.title}
          </h1>
          <div
            className={`flex flex-col md:flex-row ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } items-center mb-8`}
          >
            <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
              <ImageSlider img={project.image} />
            </div>
            <div className="w-full md:w-1/2 p-4 flex justify-center items-center ">
              <Description
                desc={project.details}
                link={project.github}
              />
            </div>
          </div>
          <hr class="my-4 w-full h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-black to-transparent opacity-100" />
        </div>
      ))}
    </div>
  );
};


export default Projects;

import Design from "./design";
import "../../App.css";
import "animate.css";

function Home() {
  // let intro_text=;

  const insert = (intro_text) => {
    let words = intro_text.split(" ");
    return words.map((text, indx) => (
      <span
        key={indx}
        className={
          "inline-block relative opacity-0 mr-2 translateY(20px) animate-fadeInUppp"
        }
        style={{ animationDelay: `${indx * 240}ms` }}
      >
        {text}{" "}
      </span>
    ));
  };

  return (
    <div className="h-auto w-full flex flex-col md:flex-row relative pb-8" id="Home">
      <div className="absolute inset-0 bg-[#81b69a] z-[-10]"></div>
      
      <div
        id="description"
        className="font-poppins rounded-r-[10rem] bg-[#FBF1D7] pr-[5rem] md:pr-8 pl-8 py-2  md:w-1/2
        flex flex-col justify-center text-[#81b69a] items-center  order-2 md:order-1"
      >
        <h2
          id="twitch_animation"
          className="text-base sm:text-xl md:text-3xl xl:text-4xl 
        px-8 w-full md:w-5/6 traking-[.75em] py-4 text-orange-500 font-bold text-center"
        >
          {insert("Hii I am Satwik  😁")}
        </h2>
        <h2
          className="text-sm sm:text-base md:text-md  lg:text-lg  
        px-8 w-full traking-[.75em] flex text-justify animate__animated animate__bounceInUp animate__delay-2s"
        >
          {/* {insert()} */}I am a Front End Developer and aspiring Full Stack
          Developer with a passion for crafting creative web designs and
          engaging animations. I thrive on solving complex problems and
          continuously upskill to perfect my craft. My dedication to staying
          current with industry trends ensures I deliver high-quality, visually
          captivating, and highly functional web solutions. Explore my portfolio
          to see how my skills and creativity come to life in my projects.
        </h2>
      </div>
      <div
        id="photo-with-design"
        className="bg-[#81b69a] flex justify-center items-center py-8 md:w-1/2 order-1 md:order-2"
      >
        <Design />{" "}
      </div>
    </div>
  );
}
export default Home;

// <div class="Offerings_card_1eC6r ParallaxWrapper_rotationWrapper_boEgu"
// style="transform: rotateX(0.983174deg) rotateY(1.24701deg) translateZ(0px);
// <div class="ParallaxWrapper_sheenWrapper_0equo sheen"
// style="background-image: linear-gradient(55deg, transparent,
// rgba(255, 255, 255, 0.055) 116.906%, transparent);

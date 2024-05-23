import Design from "./design";
import "../../App.css";

function Home() {
  return (
    <div className="h-auto w-full flex flex-col md:flex-row" id="Home">
      <div
        id="photo-with-design"
        className="bg-[#81b69a] flex justify-center items-center py-8 md:w-1/2 "
      >
        <Design />{" "}
      </div>
      <div
        id="description"
        className="font-poppins bg-[#FBF1D7] px-8 py-2 flex flex-col justify-center text-[#81b69a] items-center
        md:w-1/2 ">
        <h2
          className="text-base sm:text-xl md:text-3xl xl:text-4xl 
        px-8 w-full md:w-5/6 traking-[.75em] py-4 animate-fadeIn 
        text-orange-500 font-bold text-center">
          Hii I am Satwik
        </h2>
        <h2
          className="text-sm sm:text-base md:text-md  lg:text-lg  
        px-8 w-full traking-[.75em] animate-fadeIn flex text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </h2>
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

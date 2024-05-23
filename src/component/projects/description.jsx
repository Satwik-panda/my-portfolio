
function Description({desc,link}){
    return <div className={`h-auto text-[#31363F] flex justify-center items-center flex-col text-justify bg-slate-50 my-6 py-6`}> 

    <p className={` h-auto lg:text-lg text-base 
    px-8 w-full  flex items-center justify-center animate-fadeIn`}>
      {desc}</p>
    <a
      className={` font-semibold lg:text-lg text-sm  h-auto px-6 py-4 mt-4  rounded-full bg-[#ff871f] flex items-center justify-center 
       hover:bg-[#81b69a] hover:text-white hover:shadow-xl hover:scale-110 
      ease-in-out transition-all duration-300 pill-button  animate-fadeInDown'}`}
      href={link}>
      Go to github
    </a>
  </div>
}

export default Description;


// animate-fadeInDown
// animate-fadeIn
// animate-fadeInDown
//go to github animation idea:
// 1. put a right arrow when hovered over and not visible otherwise
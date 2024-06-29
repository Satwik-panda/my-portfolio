import '../home/home.css'; // or import './App.css';
import 'animate.css';
import Lottie from 'react-lottie';

import animationData from './1uzEGzMkww.json';

function Design(){
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  
    return <div className="font-silk-flower w-full relative flex justify-center transition-all duration-500 " id="X">
    <h1 className="child text-[#FBF1D7] text-5xl sm:text-6xl xl:text-8xl absolute z-0 left-2 min-[400px]:left-5 -top-4 md:-top-6
    transition-all duration-500 animate-slideDownFade">
      FRONTEND
    </h1>

    <div className="child w-full h-[30vh] md:h-[60vh] z-1 relative flex justify-center items-center">
        <Lottie options={defaultOptions} height={'80%'} width={'80%'} style={{ position: 'absolute', zIndex: 0 }} />
        <img src="/portfolio_img_1.png" className="child h-[30vh] md:h-[60vh] z-1 relative transform  justify-center items-center " />
    </div>
    <h1 className="child text-[#FBF1D7] text-5xl sm:text-6xl xl:text-8xl absolute z-2 right-2 min-[400px]:right-5 -bottom-8
    transition-all duration-500 animate-slideUpFade">
      DEVELOPER
    </h1>
  </div>
    // when page loads 1st h1 should come from left to its position
    // and 2nd h1 should come from right to its position, img should come from bottom to position
    // animation ideas:
    // 1.bring an underline from left to under the 
    // 2.a imaginary diagonal line from left lower end to top right in 1st section lower
    // side is darker green and 2nd section upper side darker beige

}

export default Design;
import "./skills.css";

function Skills() {
  return (
    <>
      <div className="w-full my-8   flex flex-col flex-wrap justify-around items-center">
        <p className="h-[5rem] md-4 text-3xl sm:text-4xl lg:text-5xl text-center">
          Skills aquired and honing
        </p>
      </div>
      <div
        class="inline-flex w-full flex-nowrap overflow-hidden bg-white 
    [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
      >
        <ul class="brands-wrapper">
          
          <li>
            <img
              src="./css.png"
              className="w-[43px] h-[43px] md:w-[95px] md:h-[95px]"
            />
          </li>
          <li>
            <img
              src="./html.png"
              className="w-[43px] h-[43px] md:w-[95px] md:h-[95px]"
            />
          </li>
          <li>
            <img
              src="./js.png"
              className="w-[50px] h-[50px] md:w-[105px] md:h-[105px]"
            />
          </li>
          <li>
            <img
              src="./tailwind.png"
              className="w-[150px] h-[20px] md:w-[300px] md:h-[40px]"              
            />
          </li>
          <li>
            <img
              src="./react.png" 
              className="mx-5 w-[105px] h-[35px] md:w-[210px] md:h-[70px]"              
            />
          </li>
          <li>
            <img
              src="./git.png"
              className="w-[75px] h-[30px] md:w-[160px] md:h-[62px]"
            />
          </li>
          <li>
            <img
              src="./bootstrap.png"
              className="w-[175px] h-[70px] md:w-[350px] md:h-[140px]"
            />
          </li>
        </ul>
        <ul class="brands-wrapper">
          
          <li>
            <img
              src="./css.png"
              className="w-[43px] h-[43px] md:w-[95px] md:h-[95px]"
            />
          </li>
          <li>
            <img
              src="./html.png"
              className="w-[43px] h-[43px] md:w-[95px] md:h-[95px]"
            />
          </li>
          <li>
            <img
              src="./js.png"
              className="w-[50px] h-[50px] md:w-[105px] md:h-[105px]"
            />
          </li>
          <li>
            <img
              src="./tailwind.png"
              className="w-[150px] h-[20px] md:w-[300px] md:h-[40px]"              
            />
          </li>
          <li>
            <img
              src="./react.png" 
              className="mx-5 w-[105px] h-[35px] md:w-[210px] md:h-[70px]"              
            />
          </li>
          <li>
            <img
              src="./git.png"
              className="w-[75px] h-[30px] md:w-[160px] md:h-[62px]"
            />
          </li>
          <li>
            <img
              src="./bootstrap.png"
              className="w-[175px] h-[70px] md:w-[350px] md:h-[140px]"
            />
          </li>
        </ul>
       
      </div>
      <hr class="w-full h-2 border-t-0 bg-transparent bg-gradient-to-r from-transparent via-black to-transparent opacity-100" />
    </>
  );
}

export default Skills;

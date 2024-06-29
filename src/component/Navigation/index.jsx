import { NavLink } from "react-router-dom";

function Navigation(){
    return (
        <div className="flex sm:flex-row flex-col p-8 gap-8 md:justify-between justify-center sticky bg-[#282828]">
            <div className="font-calfine tracking-wider flex justify-center items-center text-5xl">
                <h1 className="bg-gradient-custom text-transparent bg-clip-text">
                    Satwik Panda
                </h1>
            </div>
            <div className="flex gap-8 md:justify-around justify-center items-center text-md text-white ">
            <a href="#Home">Home</a>
            <a href="#Project">Project</a>
            <a href="#Contact">Contact me</a>
            </div>
        </div>
    );
}

export default Navigation;

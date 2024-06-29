import { NavLink } from "react-router-dom";

function Navigation(){
    return (
        <div className="flex sm:flex-row flex-col p-6 gap-8 justify-end sticky bg-[#81b69a]">
            <div className="flex gap-8 justify-end items-center text-md text-black ">
                <a href="#Home">Home</a>
                <a href="#Project">Project</a>
                <a href="#Contact">Contact me</a>
            </div>
        </div>
    );
}

export default Navigation;

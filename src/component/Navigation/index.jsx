import { NavLink } from "react-router-dom";

function Navigation(){
    return (
        <div className="flex m-8 gap-8 md:justify-end justify-center sticky text-sm ">
            <a href="#Home">Home</a>
            <a href="#Project">Project</a>
            <a href="#Contact">Contact me</a>
        </div>
    );
}

export default Navigation;

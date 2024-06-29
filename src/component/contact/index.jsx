import "../contact/contact.css"
import Lottie from 'react-lottie';
import animationData from './Animation.json';

function ContactMe(){
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return <div id="Contact" class="font-[sans-serif] h-auto w-auto my-8 mx-8 relative bg-white rounded-3xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] overflow-hidden">
    <div class="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-blue-400"></div>
    <div class="absolute -bottom-6 -left-0 w-24 h-20 rounded-tr-[40px] bg-teal-200"></div>
    <div class="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-blue-400"></div>
    <div class="absolute -bottom-6 -right-0 w-24 h-20 rounded-tl-[40px] bg-blue-300"></div>
    <div class="grid md:grid-cols-2">
    <div class="text-center h-[50vh] md:h-[60vh] p-6 xl:p-10 flex flex-col items-center justify-around relative">
    <h2 class="text-5xl sm:text-6xl xl:top-[6rem] text-blue-500 font-bold">Let's get in touch</h2>

    <div class="flex gap-4 mt-4 hover:cursor-pointer justify-between items-center">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=satwikpanda83@gmail.com&su=Saw_your_portfolio:)" target="_blank" class="border-r-2 pr-3 border-gray-300" >
            <img src="https://www.svgrepo.com/show/349378/gmail.svg"  width="40" height="40" alt="gmail" />
        </a>
        <a href="https://github.com/Satwik-panda/" target="_blank" class="border-r-2 pr-3 border-gray-300">
            <img src="https://www.svgrepo.com/show/94698/github.svg" width="30" height="30" alt="gt" />
        </a>
        <a href="https://www.linkedin.com/in/satwikpanda/" target="_blank" class="border-r-2 pr-3 border-gray-300">
            <img src="https://www.svgrepo.com/show/28145/linkedin.svg" width="30" height="30" alt="in" />
        </a>
        <a href="https://www.instagram.com/satwik_panda/" target="_blank">
            <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" height="30" alt="inst" />
        </a>
    </div>
    <div class="flex flex-wrap lg:flex-row gap-4 mt-4 mx-4 justify-between items-center">
        <p class="border-r-2 pr-3 border-gray-300">satwikpanda83@gmail.com</p>
        <p class="border-r-2 pr-3 border-gray-300">+91-9668421271</p>
        <p>501, Sector 39, Gurugram</p>
    </div>
</div>

        <div className="w-full h-[30vh] md:h-[60vh] z-1 relative flex justify-center items-center">
            <Lottie options={defaultOptions} height={'80%'} width={'80%'} style={{ position: 'absolute', zIndex: 0 }} />
        </div>
            {/* <img src="https://readymadeui.com/contact.webp" class="mt-4 shrink-0 w-full" /> */}
        
    </div>
</div>
    
}

export default ContactMe;

//https://mail.google.com/mail/?view=cm&fs=1&to=someone@example.com&su=SUBJECT&body=BODY
import "../contact/contact.css"

function ContactMe(){

    return <div class="font-[sans-serif] h-auto w-auto my-8 mx-8 relative bg-white rounded-3xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] overflow-hidden">
    <div class="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-blue-400"></div>
    <div class="absolute -bottom-6 -left-0 w-24 h-20 rounded-tr-[40px] bg-teal-200"></div>
    <div class="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-blue-400"></div>
    <div class="absolute -bottom-6 -right-0 w-24 h-20 rounded-tl-[40px] bg-blue-300"></div>
    <div class="grid md:grid-cols-2">
        <div class="text-center p-6 xl:p-10 flex flex-col items-center justify-center">
            <h2 class="text-6xl text-blue-500 font-bold">Let's get in touch</h2>
            <form class="p-6 xl:p-10 flex flex-col justify-center aling-center">
            <div class="max-w-sm mx-auto space-y-4">
            <div class="flex gap-4 hover:cursor-pointer">
                <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width="30" height="30" alt="fb" />
                <img src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" width="30" height="30" alt="tw" />
                <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" height="30" alt="inst" />
                <img src="https://www.svgrepo.com/show/94698/github.svg" class="" width="30" height="30" alt="gt" />
                <img src="https://www.svgrepo.com/show/22037/path.svg" width="30" height="30" alt="pn" />
                <img src="https://www.svgrepo.com/show/28145/linkedin.svg" width="30" height="30" alt="in" />
                <img src="https://www.svgrepo.com/show/22048/dribbble.svg" class="" width="30" height="30" alt="db" />
            </div>
            </div>
        </form>
        </div>
            <img src="https://readymadeui.com/contact.webp" class="mt-4 shrink-0 w-full" />
        
    </div>
</div>
    
}

export default ContactMe;

//https://mail.google.com/mail/?view=cm&fs=1&to=someone@example.com&su=SUBJECT&body=BODY
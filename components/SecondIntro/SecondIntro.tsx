import React from "react";

function SecondIntro() {
  return (
    <section className="md:h-screen h-auto my-[5rem] md:my-0 flex justify-center items-center">
    <div className="w-[80%] md:mx-auto mx-5">
      <div className="w-full border border-black md:h-[500px] md:max-h-[500px] flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-1/3 w-full h-full border border-black">
          <div className="h-[20%] border border-t-black md:border-b-black border-l-black flex justify-center items-center flex-col p-3">
            <h2 className="subtitle-head-bold text-center">2001.03.04</h2>
            <h2 className="subtitle-head-bold text-center">ABHAY KUMAR</h2>
          </div>
          <div className="h-[80%] border border-black">
            <div className="h-1/2 border border-t-black border-b-black border-l-black  flex justify-center items-center flex-col">
              <p className="lg:text-sm text-xs text-start p-5">
              👋 I&lsquo;m Abhay Kumar, a dedicated Electronics and Communication Engineer with a B.Tech from G. B. Pant University of Agriculture and Technology, Pantnagar, graduating with an 7.1/10 GPA. Currently, I&lsquo;m diving deep into full-stack web development, mastering technologies like JavaScript, React.js, and Node.js 🚀.
              </p>
            </div>
            <div className="h-1/2 border border-t-black md:border-b-black border-l-black flex justify-center items-center flex-col px-5 p-5">
              <p className="lg:text-sm text-xs text-center">If you have a project, trust me, I can make it happen. Learn more about my skills.</p>
              <p className="lg:text-sm text-xs font-semibold text-center">Let&lsquo;s connect and explore opportunities for collaboration and mutual growth...</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 w-full h-full border border-black">
          <div className="h-[20%] border border-b-black md:border-t-black border-l-black flex justify-center items-center flex-col p-2">
            <h2 className="subtitle-head-bold text-center">SOFTWARE DEVELOPER</h2>
            <h2 className="subtitle-head-bold text-center">90586 04886</h2>
          </div>
          <div className="h-[80%] w-full border border-black flex flex-col justify-center items-center gap-2 p-5">
            <p className="lg:text-sm text-xs sm:text-[10px]">shindheabhay@gmail.com</p>
            <h3 className="text-center subtitle-head-bold">India</h3>
            <img src="homepage/emailscan.png" alt="Scan QR code for more information" className="w-44 h-44 sm:h-[200px] md:h-[170px]" />
            <p className="text-bold text-gray-600 text-center">Scan for more</p>
          </div>
        </div>
        <div className="md:w-1/3 w-full h-full border-2 border-black flex justify-center items-end">
          <img src="mojis/8.png" alt="Abhay's photo" className="object-cover bg-center overflow-hidden" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000" />
        </div>
      </div>
    </div>
  </section>
  
  );
}

export default SecondIntro;

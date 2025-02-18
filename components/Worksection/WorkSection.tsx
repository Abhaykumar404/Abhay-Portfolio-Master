import React from "react";

function WorkSection() {
  return (
<section className="h-screen flex justify-center items-center">
  <div className="flex justify-center items-center relative transition-all duration-500">
    <div className="flex flex-col items-center text-center">
      <div className="absolute -bottom-14">
        <img src="homepage/pen.png" alt="Pen icon representing design work" className="h-44 w-56 mb-7 -ml-10 md:h-[350px] md:w-[450px] md:-ml-28 md:-mb-4  sm:h-[150px] sm:w-[270px] sm:mb-10 sm:-ml-16" />
      </div>
      <div className="absolute -bottom-9">
        <img src="homepage/mouse.png" alt="Mouse icon representing digital work" className="h-32 w-32 mb-5 ml-24 md:h-[250px] md:w-[250px] md:ml-72 md:-mb-4  sm:h-[150px] sm:w-[150px] sm:ml-36" />
      </div>
      <h2 className="text-5xl lg:text-8xl md:text-[80px] sm:text-6xl font-bold bg-clip-text text-transparent relative flex justify-center items-center text-center transition-transform duration-300 transform hover:scale-110">
        <span className="flex flex-col justify-center items-center gap-2">
          <span className=" text-5xl lg:text-8xl md:text-[80px] sm:text-6xl font-bold   bgcliptext">
            Scope
          </span>
          <span className=" text-5xl lg:text-8xl md:text-[80px] sm:text-6xl font-bold   bgcliptext">
            of Work
          </span>
        </span>
      </h2>
      <div className="absolute list-none flex justify-center items-center lg:text-[20px] md:text-[20px] sm:text-[15px] text-[10px] gap-3 transition-all duration-500">
        <div className="absolute font-light mt-56 lg:mt-72 xl:mt-72 lg:text-xl">
          <ul className="flex gap-10 -mt-6">
            <li className="-mt-24 sm:-mt-20 md:mt-9 lg:-mt-8 text-md md:text-3xl headingGradient font-semibold" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">Web Applications</li>
            <li className="md:-mt-2 lg:ml-16 lg:-mt-10 sm:-mt-24 -mt-24 text-md md:text-3xl headingGradient font-semibold" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">UI/UX Design</li>
            <li className="md:-mt-2 -mt-20 lg:-mt-8 lg:ml-10 sm:-mt-20 md:ml-10 text-md md:text-3xl headingGradient font-semibold" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">Mobile Applications</li>
          </ul>
          <ul className="flex mt-24 gap-9 sm:gap-12">
            <li className="-mt-16 sm:-mt-8 sm:ml-3 md:-mt-1 lg:ml-16 md:-ml-[5rem] -ml-8 text-md md:text-3xl headingGradient font-semibold" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">SaaS Services</li>
            <li className="sm:mt-4 sm:mr-16 lg:mt-44 md:mt-36 lg:mr-20 text-md md:text-3xl headingGradient font-semibold" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">Business Solution</li>
            <li className="-mt-6 md:mt-36 md:mr-2 lg:mt-44 sm:mt-4 text-md md:text-3xl headingGradient font-semibold" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">Graphic Design</li>
            <li className="md:mt-3 lg:mt-6 -mr-8 md:-mr-12 -mt-20 sm:-mt-8 text-md md:text-3xl headingGradient font-semibold" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">Shopify App Development</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}

export default WorkSection;

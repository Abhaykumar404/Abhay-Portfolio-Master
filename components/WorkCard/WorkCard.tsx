import React from "react";

function WorkCard() {
  return (
    <div className=" h-auto flex justify-center items-center mt-10 max-w-[1200px] mx-auto">
      <div className="md:h-[80vh] h-auto flex justify-center items-center gap-8 md:flex-row flex-col w-full">
        <div className=" min-h-[500px] h-full md:w-1/2 w-full bg-[#e4e4e43c] rounded-2xl p-4 flex flex-col gap-10 overflow-hidden shadow-container ">
          <div className="flex justify-start items-start pt-3 ">
            <svg
              width="44px"
              height="44px"
              viewBox="0 0 28 28"
              fill="none"
              className="bg-[#ccddfd] rounded-full p-2 "
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M21.2501 3C21.4925 3 21.7176 3.11688 21.8574 3.30983L21.9119 3.39706L25.9186 10.9098L25.9615 11.0122L25.9731 11.05L25.9901 11.1273L25.9994 11.2153L25.9973 11.3147L26.0001 11.25C26.0001 11.3551 25.9785 11.4552 25.9394 11.5461L25.9106 11.6057L25.87 11.6723L25.8173 11.7408L14.6 24.7047C14.4999 24.8391 14.3628 24.9277 14.2139 24.9703L14.1559 24.9844L14.0585 24.9979L13.9999 25L13.8993 24.9932L13.8142 24.9771L13.7109 24.9432L13.6852 24.931C13.5949 24.8911 13.5119 24.8316 13.4425 24.7535L2.17081 11.7263L2.1087 11.6387L2.06079 11.5456L2.02611 11.4463L2.00297 11.3152L2.00269 11.1878L2.01755 11.0891L2.02714 11.0499L2.06104 10.9538L2.08838 10.8971L6.08838 3.39706C6.20243 3.18321 6.41149 3.0396 6.64753 3.00704L6.75014 3H21.2501ZM17.9061 12H10.0911L14.0011 22.16L17.9061 12ZM8.48514 12H4.38914L11.7621 20.518L8.48514 12ZM23.6081 12H19.5151L16.2421 20.511L23.6081 12ZM10.0241 4.499H7.19914L3.99814 10.5H8.42314L10.0241 4.499ZM16.4231 4.499H11.5761L9.97514 10.5H18.0231L16.4231 4.499ZM20.8001 4.499H17.9751L19.5761 10.5H23.9991L20.8001 4.499Z"
                  fill="#212121"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl ">Corporate Website Development Project</h1>
            <p className="text-sm">
              Led end-to-end development of the official company website, from
              conceptualization to implementation. Personally designed and coded
              the website, ensuring alignment with company branding and
              objectives. Additionally, replicated the website for the companys
              branch Elevate Clicks, demonstrating versatility in project
              management and execution.
            </p>
          </div>

          <div className="flex justify-center items-end h-full mt-5">
            <img className="w-auto h-auto " src="project/dommyOne.png" alt="" />
          </div>
        </div>
        <div className=" min-h-[500px] h-full md:w-1/2 w-full bg-[#e4e4e43c] rounded-2xl p-4 flex flex-col gap-10 overflow-hidden shadow-container">
          <div className="flex justify-start items-start pt-2 ">
            <svg
              width="44px"
              height="44px"
              viewBox="0 0 28 28"
              fill="none"
              className="bg-[#ccddfd] rounded-full p-2 "
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M21.2501 3C21.4925 3 21.7176 3.11688 21.8574 3.30983L21.9119 3.39706L25.9186 10.9098L25.9615 11.0122L25.9731 11.05L25.9901 11.1273L25.9994 11.2153L25.9973 11.3147L26.0001 11.25C26.0001 11.3551 25.9785 11.4552 25.9394 11.5461L25.9106 11.6057L25.87 11.6723L25.8173 11.7408L14.6 24.7047C14.4999 24.8391 14.3628 24.9277 14.2139 24.9703L14.1559 24.9844L14.0585 24.9979L13.9999 25L13.8993 24.9932L13.8142 24.9771L13.7109 24.9432L13.6852 24.931C13.5949 24.8911 13.5119 24.8316 13.4425 24.7535L2.17081 11.7263L2.1087 11.6387L2.06079 11.5456L2.02611 11.4463L2.00297 11.3152L2.00269 11.1878L2.01755 11.0891L2.02714 11.0499L2.06104 10.9538L2.08838 10.8971L6.08838 3.39706C6.20243 3.18321 6.41149 3.0396 6.64753 3.00704L6.75014 3H21.2501ZM17.9061 12H10.0911L14.0011 22.16L17.9061 12ZM8.48514 12H4.38914L11.7621 20.518L8.48514 12ZM23.6081 12H19.5151L16.2421 20.511L23.6081 12ZM10.0241 4.499H7.19914L3.99814 10.5H8.42314L10.0241 4.499ZM16.4231 4.499H11.5761L9.97514 10.5H18.0231L16.4231 4.499ZM20.8001 4.499H17.9751L19.5761 10.5H23.9991L20.8001 4.499Z"
                  fill="#212121"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl ">
              Official Company Website Project Leadership
            </h1>
            <p className="text-sm">
              I spearheaded the comprehensive development of the company
              official website, overseeing the entire journey from initial
              concept to final launch. I independently designed and programmed
              the site, ensuring strict adherence to the company branding and
              goals. Furthermore, I duplicated the website for the company
              branch, highlighting my flexibility in project management and
              execution.
            </p>
          </div>

          <div className="flex justify-center items-end h-full">
            <img className="w-auto h-auto " src="project/dummyTwo.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;

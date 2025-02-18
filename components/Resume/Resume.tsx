import React from "react";

function Resume() {
  return (
    <div className="md:h-screen h-auto flex justify-center items-center my-[5rem]">
      <div className="container mx-auto flex justify-center items-center transition-all duration-500 ">
        <div className="flex-cols-1 md:flex-cols-2 gap-4 flex justify-center items-center">
          <div className="md:border md:border-gray-900 border-none  mb-2 mx-5">
            {/* <div className=" flex flex-col items-start">
              <div className="h-9 mt-4 flex  items-start">
                <h3
                  className="text-start font-bold tracking-wide subtitle-heading-bold text-gray-600"
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-duration="1000"
                >
                  RESUME !
                </h3>
              </div>
            </div> */}
            <div className=" mb-6 mt-16 max-w-[800px]">
              <h4 className=" font-semibold tracking-wide subtitle-heading-bold  mb-3">
                Intro!
              </h4>
              <div className=" text-gray-600 flex flex-col items-start gap-2">
                <p className="lg:text-sm text-xs semibold">
                  🚀 Experienced Full Stack Web Developer 🌐
                </p>
                <p className="lg:text-sm text-xs ">
                  {" "}
                  - With a year of dynamic experience encompassing both
                  internships and professional roles, I bring a wealth of
                  expertise to the table. Proficient in cutting-edge
                  technologies including Next.js, TypeScript, GraphQL,
                  Node.js,React,Wordpress,Webflow and Shopify App Development I thrive in crafting seamless web
                  solutions. 🛠️
                </p>
                <p className="lg:text-sm text-xs ">
                  -My commitment to excellence is unwavering, as evidenced by my
                  proactive and detail-oriented approach to every project. I am
                  driven by a passion for delivering high-quality solutions that
                  exceed expectations. 💡
                </p>
                <p className="lg:text-sm text-xs ">
                  -Moreover, I am deeply enthusiastic about continuous learning,
                  constantly seeking out new challenges and opportunities to
                  expand my skill set. I am particularly excited about the
                  potential of integrating AI into projects, as I believe it
                  holds the key to unlocking innovative solutions for
                  tomorrow&apos;s problems. 🤖
                </p>
                <p className="lg:text-sm text-xs font-semibold">
                  Let&apos;s collaborate to turn your ideas into reality,
                  powered by expertise, innovation, and a relentless pursuit of
                  excellence. 💼
                </p>
              </div>

              <h4 className="font-semibold tracking-wide subtitle-heading-bold mt-16 mb-3">
                Skills!
              </h4>
              <p className="lg:text-sm text-xs  text-gray-600 uppercase font-semibold">
                Nextjs, Reactjs, Nodejs, RestAPI, JavaScript, GraphQlAPI,
                Nestjs, Node.js, Wordpress, Webflow, Shopify, Prisma, SQL , MERN stack.
              </p>

              <p className="lg:text-sm text-xs  font-semibold text-gray-900 mt-2">
                Responsibility, Adaptable, Fast Learner.
              </p>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;

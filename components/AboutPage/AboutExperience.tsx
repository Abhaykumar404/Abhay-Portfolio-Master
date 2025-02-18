import React from "react";

function AboutExperience() {
  return (
    <section className='min-h-screen flex flex-col gap-10 md:mx-4 xl:mx-0'>
      <div className='w-full my-5 bg-gray-500 h-[1px] '></div>

      <div className=' md:flex justify-between items-start gap-3 mx-5 md:mx-auto max-w-[1200px] relative '>
        <h3 className='md:w-1/2 w-full  mb-5 subtitle-heading-bold underline'>
          Corporate Experience
        </h3>
        <div className='md:w-1/2 w-full'>
          <ul>
            <li className='flex flex-col items-start gap-3'>
              <div>
                <h1 className='font-semibold md:text-xl mb-3'>
                  Digital Umbrella
                </h1>
                <h2 className='font-semiold'>
                  Full Stack Webdeveloper, Roorkee (oct 2023 to oct 2024)
                </h2>
              </div>
              <p className='text-sm'>
                Pioneered the creation of a dynamic frontend theme system for
                our company’s e-commerce platform, utilizing innovative
                techniques to dynamically load and display components. This
                system, integrated into our Outlet application, allows users to
                easily select and achieve their desired design, transforming the
                frontend development experience.<br/>
                During my time at the company,
                I developed several custom themes,<br/>
                including: <br/>🔗 <a href='https://primemart.ooulet.com/' className='text-blue-600'>Primemart</a><br/>🔗
                <a href='https://furstore.ooulet.com/' className='text-blue-600'>Furstore</a> <br/>🔗 <a href='https://spring.ooulet.com/' className='text-blue-600'>Spring</a> <br/>🔗 <a href='https://mystique.ooulet.com/' className='text-blue-600'>Mystique</a><br/>These themes showcase my ability
                to build flexible, scalable, and user-friendly e-commerce
                solutions.
              </p>
              <p className='text-sm'>
                the development and implementation of a customized CRM system to
                streamline in- teractions between sales teams and customers.
                Seamlessly integrated WhatsApp API to enhance communication
                capabilities, facilitating efficient engagement.
              </p>
            </li>
            <div className='w-full my-5 bg-gray-500 h-[1px]'></div>
            <li className='flex flex-col items-start gap-3'>
              <div>
                <h1 className='font-semibold md:text-xl mb-3'>Freelance</h1>
                <h2 className='font-semiold'>
                  Full Stack Web developer (October 2024 to Present)
                </h2>
              </div>
              <p className='text-sm'>
                💻 Currently working as a freelancer, delivering high-quality
                websites, custom Shopify apps, and advanced theme customization
                to help businesses scale and enhance their online presence. I
                take pride in writing clean, efficient, and maintainable code
                while ensuring seamless user experiences.
              </p>
              <p className='text-sm'>
                ✨ My goal is to not just build websites but to craft digital
                experiences that drive engagement and conversions, ensuring 100%
                client satisfaction. 🚀
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className='w-full my-5 bg-gray-500 h-[1px] '></div>

      <div className=' md:flex justify-between items-start gap-3 mx-5 md:mx-auto max-w-[1200px] relative'>
        <h3 className='md:w-1/2 w-full  mb-5  subtitle-heading-bold '>
          Additional Projects
        </h3>
        <div className='md:w-1/2 w-full'>
          <ul>
            <li className='flex flex-col items-start gap-3'>
              <div>
                <h1 className='font-semibold md:text-xl mb-3'>
                  Blotup (Website collaboration)
                </h1>
                <h2 className='font-semiold'>Freelance (January 2025)</h2>
              </div>
              <p className='text-sm'>
                🚀 BlotUp.com – Revolutionizing Website Issue Tracking!
              </p>
              <p className='text-sm'>
                As a frontend developer, I collaborated with the BlotUp team to
                create a tool that simplifies website debugging for teams. No
                more juggling screenshots, emails, and spreadsheets..
              </p>
              <p className='text-sm'>
                🔥 Key Features:
                <br /> ✅ On-Site Annotations – Leave comments directly on
                websites.
                <br /> ✅ Auto Screenshot Capture – Automatically document
                issues.
                <br /> ✅ Real-Time Collaboration – Teams work together
                seamlessly.
                <br /> ✅ Smart Issue Detection – Detect 22+ common website
                problems.
                <br /> ✅ 50% Faster Debugging – Save time resolving issues.
                BlotUp helps designers, developers, testers, and product
                managers streamline their workflow and focus on delivering
                better user experiences. 🚀
              </p>
              <p className='text-sm'>
                🔗 Check out{" "}
                <a href='https://blotup.com/' className='text-blue-600'>
                  BlotUp.com
                </a>{" "}
                to learn more!
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className='w-full my-5 bg-gray-500 h-[1px] '></div>
    </section>
  );
}

export default AboutExperience;

import React from "react";

function Footer() {
  return (
    <div>
      <div className=" p-4 flex flex-col items-center mb-10">
        <div className="h-9  flex flex-row gap-8 items-center justify-end">
            <a href="https://x.com/abhayx34" target="_blank" className="mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 48 48"
            >
              <polygon
                fill="#000000"
                points="41,6 9.929,42 6.215,42 37.287,6"
              ></polygon>
              <polygon
                fill="#fff"
                fillRule="evenodd"
                points="31.143,41 7.82,7 16.777,7 40.1,41"
                clipRule="evenodd"
              ></polygon>
              <path
                fill="#616161"
                d="M15.724,9l20.578,30h-4.106L11.618,9H15.724 M17.304,6H5.922l24.694,36h11.382L17.304,6L17.304,6z"
              ></path>
            </svg>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/abhay-kumar-007-/"><img src="homepage/linkedin.png" alt="" className="h-6 w-6 mt-2" /></a>
          
          <a target="_blank" href="https://github.com/Abhaykumar404">
            <img src="homepage/github.png" alt="" className="h-6 w-6 mt-2" />
          </a>

          <a target="_blank" href="mailto:shindheabhay@gmail.com">
            <img src="homepage/email.png" alt="" className="h-7 w-7 mt-2" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

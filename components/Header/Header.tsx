import React from "react";

function Header() {
  return (
    <div>
      <div className="flex justify-center items-center gap-5 mx-auto h-20 font-normal">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/work">Work</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
}

export default Header;

import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`min-h-[10vh] z-50 fixed py-5 w-full transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div id="largerHeader" className="w-[90%] flex justify-between mx-auto">
        <img
          src="/assets/images/ON.png"
          alt="logo"
          className="w-20 h-16 transition-transform duration-300 ease-in-out hover:translate-x-1"
        />
        <div className="flex max-md:hidden gap-10 place-items-center">
          <nav className="flex gap-4">
            <NavLink
              to="/"
              className={({ isActive }) => `text-${isScrolled ? "black" : "white"} ${isActive ? "font-bold text-blue" : ""} ${isScrolled ? "text-lg" : ""}`}
            >
              Home
            </NavLink>
            <NavLink
              to="/tarif"
              className={({ isActive }) => `text-${isScrolled ? "black" : "white"} ${isActive ? "font-bold text-blue" : ""} ${isScrolled ? "text-lg" : ""}`}
            >
              Tarifs
            </NavLink>
            <NavLink
              to="/demo"
              className={({ isActive }) => `text-${isScrolled ? "black" : "white"} ${isActive ? "font-bold text-blue" : ""} ${isScrolled ? "text-lg" : ""}`}
            >
              Demo
            </NavLink>
          </nav>
          <Link
            to=""
            className={`group font-semibold rounded-tl-xl rounded-br-xl flex gap-2 py-3 hover:bg-dark-blue transition-all duration-300 ease-in-out px-5 ${
              isScrolled ? "bg-blue text-white" : "bg-blue text-white"
            }`}
          >
            <p>Buy Now</p>
            <img
              src="/assets/images/shopping-cart (2).png"
              alt=""
              className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

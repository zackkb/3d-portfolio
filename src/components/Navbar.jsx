import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles"; // Importing styles
import { navLinks } from "../constants"; // Importing constants
import { logo, menu, close } from "../assets"; // Importing assets

const Navbar = () => {
  const [active, setActive] = useState(""); // Managing state for active link
  const [toggle, setToggle] = useState(false); // Managing state for toggle menu
  const [scrolled, setScrolled] = useState(false); // Managing state for scroll position

  useEffect(() => {
    // Listening to scroll events and updating the state
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Adding and removing event listener when component mounts and unmounts
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Rendering the navigation bar with logo, menu, and toggle button
  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive(""); // Clearing active link state
            window.scrollTo(0, 0); // Scrolling to top of page
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Zach &nbsp;
            <span className="sm:block hidden"> | Fullstack Developer</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {/* Mapping through constant array and rendering links */}
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          {/* Conditional rendering of menu */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {/* Mapping through constant array and rendering links */}
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  // Conditionally setting class name depending on whether the item is active
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  // Updating active state variable when the item is clicked
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

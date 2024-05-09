import React, { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";
import ContextApi from "./ContextApi";

function Navbar() {

    const {user} = useContext(ContextApi)

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleToggler = () => {
        setIsMenuOpen(!isMenuOpen)
    }
  const navItems = [
    {
      path: "/dashbord",
      title: "Start a search",
    },
    {
      path: "/update-profile",
      title: "Update Profile",
    },
  ];

  return (
    <header className="max-w-screen-2x1 container mx-auto xl:px-24 px-4">
      <nav className="flex justify-between items-center py-6">
        <a href="" className="text-2xl">
          JobConnect
        </a>

        {/* Rendering The Nav Items */}
        <ul className="hidden md:flex gap-12">
          {navItems.map(({ path, title }) => (
            <li key={path} >
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* sign up and login button */}
        <div className="font-medium space-x-5 hidden lg:block">
           
           <h3>Hi, User</h3>
        </div>

        <div className="md:hidden block"> 
            <button onClick={handleToggler}>
                {
                    isMenuOpen ? < FaXmark className="w-5 h-5 text-black" /> : <GiHamburgerMenu className="w-5 h-5 text-black" /> 
                }
            </button>
        </div>
      </nav>

      {/* nav items for mobile */}
      <div className={`px-4 bg-black py-5 rounded-sm ${ isMenuOpen ? "" : "hidden"}`}>
        <ul>
        {navItems.map(({ path, title }) => (
            <li key={path} className="text-white" >
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;

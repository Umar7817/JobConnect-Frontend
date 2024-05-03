import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleToggler = () => {
        setIsMenuOpen(!isMenuOpen)
    }
  const navItems = [
    {
      path: "/",
      title: "Start a search",
    },
    {
      path: "salary",
      title: "Salary",
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
            <Link to={"/login"} className="py-2 px-5 border rounded">Login</Link>
            <Link to={"/sign-up"} className="py-2 px-5 border rounded bg-blue-600 text-white">Sign up</Link>
            
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
        <Link to={"/login"} className="text-white">Login</Link>
      </div>
    </header>
  );
}

export default Navbar;

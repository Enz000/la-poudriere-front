import React, { useState } from "react";
import Button from "./Button";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const handleToggleClick = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header className="h-10vh realtive   mx-4 md:mx-14 ">
      {/* Desktop Nav part */}
      <div className=" hidden lg:flex items-center  h-full justify-between ">
        <h1 className=" font-bold text-brown text-lg md:text-xl cursor-pointer">
          <Link to="/">La Poudrière</Link>
        </h1>
        <nav>
          <ul className="text-md  text-kaki font-semibold flex ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-brown mr-7 underline" : "mr-7"
              }
            >
              Accueil
            </NavLink>
            <NavLink
              to="/notre-histoire"
              className={({ isActive }) =>
                isActive ? "text-brown mr-7 underline" : "mr-7"
              }
            >
              Notre Histoire
            </NavLink>
            <NavLink
              to="/prix"
              className={({ isActive }) =>
                isActive ? "text-brown mr-7 underline" : "mr-7"
              }
            >
              Nos Tarifs
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-brown mr-7 underline" : "mr-7"
              }
            >
              Contactez-nous
            </NavLink>
          </ul>
        </nav>
        <Button
          content={"Prendre RDV"}
          link={"https://www.planity.com/la-poudriere-67000-strasbourg"}
          buttonColor={"brown"}
        />
      </div>
      {/* Mobile navigation part */}
      <div
        className={
          navOpen
            ? "fixed flex top-0 left-0 w-full z-40 h-10vh bg-cream overflow-hidden items-center justify-between  px-4 "
            : "flex h-full  bg-cream overflow-hidden lg:hidden    items-center justify-between  "
        }
      >
        <h1 className=" font-bold text-brown text-lg">
          <NavLink to="/">La Poudrière</NavLink>
        </h1>
        <div onClick={handleToggleClick}>
          {navOpen ? (
            <svg
              className=" cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 15 15"
              version="1.1"
              fill=" #5C675E"
            >
              <path
                d="M2.64,1.27L7.5,6.13l4.84-4.84C12.5114,1.1076,12.7497,1.0029,13,1c0.5523,0,1,0.4477,1,1&#10;&#9;c0.0047,0.2478-0.093,0.4866-0.27,0.66L8.84,7.5l4.89,4.89c0.1648,0.1612,0.2615,0.3796,0.27,0.61c0,0.5523-0.4477,1-1,1&#10;&#9;c-0.2577,0.0107-0.508-0.0873-0.69-0.27L7.5,8.87l-4.85,4.85C2.4793,13.8963,2.2453,13.9971,2,14c-0.5523,0-1-0.4477-1-1&#10;&#9;c-0.0047-0.2478,0.093-0.4866,0.27-0.66L6.16,7.5L1.27,2.61C1.1052,2.4488,1.0085,2.2304,1,2c0-0.5523,0.4477-1,1-1&#10;&#9;C2.2404,1.0029,2.4701,1.0998,2.64,1.27z"
              />
            </svg>
          ) : (
            <svg
              className=" cursor-pointer"
              height="25px"
              version="1.1"
              viewBox="0 0 32 32"
              width="25px"
              fill=" #5C675E"
            >
              <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
            </svg>
          )}
        </div>
        <div
          className={`fixed z-10 ${
            !navOpen && "translate-x-full"
          } overflow-x-hidden  transition-all  ease-in-out duration-300  left-0 bottom-0 w-full h-90vh lg:hidden `}
        >
          <div className=" flex bg-brown  h-full ">
            <ul
              className=" flex m-auto justify-around h-1/3 font-semibold text-cream text-xl  items-center flex-col cursor-pointer"
              onClick={handleToggleClick}
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-kaki underline" : ""
                }
              >
                Accueil
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-kaki underline" : ""
                }
                to="/notre-histoire"
              >
                Notre Histoire
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-kaki underline" : ""
                }
                to="/prix"
              >
                Nos Tarifs
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-kaki underline" : ""
                }
                to="/contact"
              >
                Contactez-nous
              </NavLink>
              <Button
                content={"Prendre RDV"}
                buttonColor={"cream"}
                link={"https://www.planity.com/la-poudriere-67000-strasbourg"}
              />
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Navbar);

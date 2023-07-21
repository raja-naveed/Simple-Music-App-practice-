import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { navBar } from "./../assets/data/data";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai"
import profile from "../assets/images/b4.jpg";

export const Header = () => {
  const activeNavLink = ({ isActive }) => (isActive ? "active" : "NavLink");
  const [isMenu, setIsMenu] = useState(false);
  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-screen h-[8vh] md:shadow-lg bg-white">
        {/* desktop  */}
        <div className="hidden md:flex justify-between px-7 p-2">
          <div className="logo flex">
            <div>
              <img src={logo} alt="" width="40px" height="40px" />
            </div>
            <h2 className="text-2xl font-semibold ml-3">Musify</h2>
          </div>

          {/* navlinkds  */}
          <div className="">
            <ul className="">
              {navBar.map((list, i) => (
                <li key={i} className={`inline-block mx-3 ${activeNavLink}`}>
                  <NavLink to={list.path}>{list.name}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* profile  */}
          <div className=" profile flex items-center">
            <AiOutlineSearch size={22} />
            <button className="bg-primary px-6 py-1.5 text-white rounded-full mx-3">
              Upload
            </button>
            <div className="img w-10 h-10 rounded-full">
              <img
                src={profile}
                alt=""
                className="img w-10 h-10 bg-red-300 rounded-full object-cover cursor-pointer"
              />
            </div>
          </div>

          {/* Mobile  */}
          <div className="flex items-center justify-between md:hidden h-full pl-2 pr-8">
            <div className="logo flex">
              <div>
                <img src={logo} alt="" width="40px" height="40px" />
              </div>
              <h2 className="text-2xl font-semibold ml-3">Musify</h2>
            </div>
          </div>
          {/* space  */}
          <div>
            {isMenu && (
              <div className="bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-16 left-0 w-full">
                <ul className="flex flex-col">
                  {navBar.map((list, i) => (
                    <li
                      key={i}
                      className={`mx-5 py-2 ${activeNavLink}`}
                    >
                      <NavLink to={list.path}>{list.name}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
                      <AiOutlineMenu size={20} onClick={() => setIsMenu(!isMenu)} />

          </div>
        </div>
      </header>
    </>
  );
};

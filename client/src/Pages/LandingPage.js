import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Menu from "../assets/mobile_bar.png";
import Close from "../assets/close.png";
import landingPage from "../assets/landingPage.jpg"

export default function LandingPage(props) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const res = await fetch("user/logout");
    props.setIsLoggedIn(false);
    navigate("/");
  };

  useEffect(() => {
    const checklogin = async () => {
      const res = await fetch("/user/auth");
      const data = await res.json();
      console.log(data);
      if (data.msg === "Login to Proceed") {
        props.setIsLoggedIn(false);
      } else {
        props.setIsLoggedIn(true);
      }
    };
    checklogin();
  }, []);

  const [isMobile, setIsMobile] = useState(true);

  return (
    <div className="w-screen min-h-screen bg-white lg:px-24 px-12">
      <nav className="nav-mobile lg:hidden ">
        <div
          className="pt-4 lg:flex lg:py-5 items-center lg:text-xl text-sm lg:justify-between justify-start"
          id="navbar"
        >
          <div className="flex">
            <h1 className="text-[#fc7b54] text-3xl font-semibold pt-4">
              FinFlow
            </h1>
            <button
              className=" ml-auto mt-4 bg-[#fc7b54] rounded-md "
              onClick={() => setIsMobile(!isMobile)}
            >
              {/* <h1 className="text-mj-black">jayesh patil</h1> */}
              {isMobile ? (
                <img src={Menu} className="h-10 w-10 p-2 "></img>
              ) : (
                <img src={Close} className="h-10 w-10 p-3 "></img>
              )}
            </button>
          </div>
          <div
            onClick={() => setIsMobile(true)}
            className={
              isMobile
                ? "text-[#fc7b54] hidden"
                : "text-[#fc7b54] grid grid-rows-3 w-fit ml-24 text-center text-xl "
            }
          >
            <Link to="/about-us">
              <div className="lg:px-4 px-1 py-4 cursor-pointer hover:bg-violet-100 hover:rounded-md mx-2 ">
                <h1>About Us</h1>
              </div>
            </Link>
            <div
              onClick={props.openModalContact}
              className="lg:px-4 px-1 py-4 cursor-pointer hover:bg-violet-100 hover:rounded-md ml-2 mr-4"
            >
              <h1>Contact Us</h1>
            </div>

            {props.isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="bg-[#fc7b54] text-mj-black px-3 py-1 rounded-md font-semibold hover:scale-110 duration-200 ease-in-out"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={props.openModalLogin}
                className="bg-[#fc7b54] text-mj-black px-3 py-1 rounded-md font-semibold hover:scale-110 duration-200 ease-in-out"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </nav>
      <div
        className="nav-desktop hidden lg:flex lg:py-5 items-center lg:text-xl text-sm lg:justify-between justify-start"
        id="navbar"
      >
        <h1 className="text-[#fc7b54] lg:text-4xl md:text-3xl font-semibold text-2xl">
          FinFlow
        </h1>
        <div className="grid grid-cols-2 lg:flex items-center lg:justify-between text-[#fc7b54] ">
          <div
            onClick={props.openModalContact}
            className="lg:px-4 px-1 py-4 cursor-pointer hover:bg-violet-100 hover:rounded-md ml-2 mr-4"
          >
            <h1>Contact Us</h1>
          </div>

          {props.isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-[#fc7b54] text-mj-black px-3 py-1 rounded-md font-semibold hover:scale-110 duration-200 ease-in-out"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={props.openModalLogin}
              className="bg-[#fc7b54] text-mj-black px-3 py-1 rounded-md font-semibold hover:scale-110 duration-200 ease-in-out"
            >
              Login
            </button>
          )}
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:h-5/6 mt-20 lg:mt-10 pb-7">
        <div className="my-auto">
          <div className="lg:text-4xl lg:py-3 xl:text-6xl text-3xl p-1 text-rp-black">
            The{" "}
            <span className="text-[#fc7b54] underline">Expense Tracker</span>{" "}
            that works for you
          </div>
          <div className="lg:text-2xl py-2 text-xl mt-4 text-rp-black">
            Track all your expenses here...
          </div>
          {props.isLoggedIn ? (
            <button
              onClick={() => {
                navigate("/dashboard");
              }}
              className="bg-[#fc7b54] text-mj-black px-4 py-2 rounded-md font-semibold flex items-center w-fit my-2"
            >
              Dashboard
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="pl-1 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          ) : (
            <button
              onClick={props.openModalSignup}
              className="mt-8 bg-[#fc7b54] text-mj-black px-4 py-2 rounded-md font-semibold flex items-center w-fit my-2"
            >
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="pl-1 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>
        <div className="my-auto mt-20 w-full">
          <img src={landingPage} alt="join now" className="rounded-xl" />
        </div>
      </div>
    </div>
  );
}

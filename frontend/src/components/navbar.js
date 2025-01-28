import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [servicefinal, setServiceFinal] = useState(true)
  const [mobileService, setMobileService] = useState(true)
  const [mobileAutomation, setMobileAutomation] = useState(true)
  const [mobileCounsulting, setMobileConsulting] = useState(true)
  const [service2, setService2] = useState(true);
  const [automation, setAutomation] = useState(true);
  const [consulting, setConsulting] = useState(true);
  const [mobile, setMobile] = useState(true)
  return (
    <>
      <div className="hidden lg:flex">
        <nav className=" flex justify-between items-center w-screen  overflow-hidden">
          {/* left side */}
          <Link to={"/"}>
            <img src="./logo.png" className="h-16 w-auto max-w-full sm:h0-10 md:h-12 lg:h-14 xl:h-16"></img>
          </Link>


          {/* middle part */}
          <ul className=" text-lg gap-10 flex font-jost ">
            <Link to={"/"}>
              <li>Home</li>
            </Link>

            <Link to={"/projects"}>
              <li>Projects</li>
            </Link>
            <div className="flex gap-2 justify-center items-center cursor-pointer"
              onMouseEnter={() => setServiceFinal(false)}
            // onMouseLeave={() => setServiceFinal(true)}
            >
              Service
              <img className={`${servicefinal ? "" : "-rotate-90"} transition-all ease-linear cursor-pointer aspect-square h-4`} src="./dropdown_arrow.png" />
            </div>

            <Link to={"/contact"}>
              <li>Contact Us</li>
            </Link>
          </ul>
          <div className=" ">
            <div className=" relative flex items-center">
              {/* Search Bar */}
              {showSearch && (
                <input
                  type="text"
                  placeholder="Search here"
                  className="absolute right-12 p-2 bottom-2  bg-white text-gray-900 rounded-xl border border-gray-900 focus:outline-none transition-all duration-500"
                // style={{ width: "200px" }}
                />
              )}

              {/* Search Button */}
              <button
                className="focus:outline-none"
                onClick={() => setShowSearch((prev) => !prev)}
              >
                <img
                  className="h-11 pb-4 "
                  src="./SEARCH.png"
                  alt=" searchicon"
                />
              </button>
            </div>
          </div>
        </nav>
        {/* Service dropdown */}
        <div
          className={`${servicefinal ? "h-0 overflow-hidden" : "h-auto bg-[#1f1f1f]"} absolute top-14 right-[38rem] z-40 text-white w-[15rem]`}
          onMouseEnter={() => {
            setServiceFinal(false);
          }}
          onMouseLeave={() => {
            setServiceFinal(true);
          }}
        >
          <Link to={"/automation"}>
            <p
              onMouseEnter={() => setAutomation(!automation)}
              onMouseLeave={() => setAutomation(true)}
              className="cursor-pointer px-5 py-3 transition-all duration-300 ease-linear hover:bg-[#0088fe]"
            >
              Automation
            </p>
          </Link>
          <Link to={"/consulting"}>
            <p
              onMouseEnter={() => setConsulting(!consulting)}
              onMouseLeave={() => setConsulting(true)}
              className="cursor-pointer px-5 py-3 transition-all duration-300 ease-linear hover:bg-[#0088fe]"
            >
              Consulting
            </p>
          </Link>
          <Link to={"/engineering"}>
            <p
              onMouseEnter={() => setService2(!service2)}
              onMouseLeave={() => setService2(true)}
              className="cursor-pointer px-5 py-3 transition-all duration-300 ease-linear hover:bg-[#0088fe]"
            >
              Engineering
            </p>
          </Link>
          <Link to={"/lighting"}>
            <p className="cursor-pointer px-5 py-3 transition-all duration-300 ease-linear hover:bg-[#0088fe]"
            >
              Lighting
            </p>
          </Link>
        </div>


        {/*Automation Dropdown */}
        <div
          onMouseEnter={() => {
            setServiceFinal(false);
            setAutomation(false);
          }}
          onMouseLeave={() => {
            setServiceFinal(true);
            setAutomation(true);
          }}
          className={`${automation
            ? "hidden"
            : `z-[10000] h-auto transition-all ease-linear bg-[#1f1f1f] text-white w-[15rem] flex flex-col justify-center absolute top-[56px] right-[23rem]`
            }`}
        >

          <Link to={"/home-automation"}>
            <p className="cursor-pointer px-5 py-3 transition-all duration-300 ease-linear hover:bg-[#0088fe]">
              Home Automation
            </p>
          </Link>
        </div>
        {/* Consulting Dropdown */}
        <div
          onMouseEnter={() => {
            setServiceFinal(false);
            setConsulting(false);
          }}
          onMouseLeave={() => {
            setServiceFinal(true);
            setConsulting(true);
          }}
          className={`${consulting
            ? "hidden"
            : `z-[10000] h-auto transition-all ease-linear bg-[#1f1f1f] text-white w-[15rem] flex flex-col justify-center absolute top-[103px] right-[23rem]`
            }`}
        >
          <Link to={"/energy-consulting"}>
            <p className="cursor-pointer px-5 py-3 transition-all duration-300 ease-linear hover:bg-[#0088fe]">
              Energy Consulting & Auditing
            </p>
          </Link>
          <Link to={"/electrical-consulting"}>
            <p className="cursor-pointer px-5 py-3 transition-all duration-300 ease-linear hover:bg-[#0088fe]">
              Electrical Consulting & Projects
            </p>
          </Link>
        </div>
      </div>

      <div className="w-screen flex items-center justify-around gap-5 lg:hidden">
        <div onClick={() => {
          setMobile(!mobile)
        }} className={` text-3xl ${mobile ? "rotate-0" : "rotate-90"}`}>
          |||
        </div>
        <Link to={"/"}>
          <img src="./logo.png" className="h-16 w-auto max-w-full sm:h-10 md:h-12 lg:h-14 xl:h-16"></img>
        </Link>

        <div className=" ">
          <div className="  flex items-center">
            {/* Search Bar */}
            {showSearch && (
              <input
                type="text"
                placeholder="Search here"
                className="absolute right-12 p-2 bottom-2  bg-white text-gray-900 rounded-xl border border-gray-900 focus:outline-none transition-all duration-500"
                style={{ width: "200px" }}
              />
            )}



            {/* Search Button */}
            <button
              className="focus:outline-none"
              onClick={() => setShowSearch((prev) => !prev)}
            >
              <img
                className="h-11 pb-4 "
                src="./SEARCH.png"
                alt=" searchicon"
              />
            </button>
          </div>
        </div>


        {
          mobile && (
            <div className="fixed z-[99] h-screen w-screen bg-white top-0 left-0">

              <div onClick={() => {
                setMobile(!mobile)
              }} className={` text-3xl fixed top-4 left-10 ${mobile ? "rotate-0" : "rotate-90"}`}>
                X
              </div>
              <div className="mt-20 ml-10 ">
                <ul className="flex flex-col text-3xl">
                  <li className="mt-4">Home</li>
                  <li className="mt-4">Projects</li>
                  <li className="mt-4" onClick={() => setMobileService(!mobileService)}>Services
                  </li>
                  <div className={`transition-all ease-linear duration-200 ${mobileService ? "h-0 overflow-hidden" : "mt-2 h-auto"} ml-5 text-xl flex flex-col gap-1 text-md`}>
                    <h1 onClick={() => setMobileAutomation(!mobileAutomation)}>Automation</h1>
                    <div className={`transition-all ease-linear duration-200 ${mobileAutomation ? "h-0 overflow-hidden" : "h-8"} ml-10 text-base`}>Home Automation</div>
                    <h1 onClick={() => setMobileConsulting(!mobileCounsulting)}>Consulting</h1>
                    <div className={`transition-all ease-linear duration-200 ${mobileCounsulting ? "h-0 overflow-hidden" : "h-16"} ml-10 text-base`}>
                      <h1>Energy Consulting & Auditing</h1>
                      <h1>Electrical Consulting & Auditing</h1>
                    </div>
                    <h1>Engineering</h1>
                    <h1>Lighting</h1>
                  </div>
                  <li className="mt-4">Contact Us</li>
                </ul>
              </div>
            </div>
          )
        }
      </div>
    </>
  );
};

export default Navbar;

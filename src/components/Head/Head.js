import React, { useState } from "react";
import { FiMoon } from "react-icons/fi";
import { RiArrowDropDownLine, RiArrowUpSLine } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { BiSun } from "react-icons/bi";
import logo from "../../assets/WhatsApp Image 2023-11-14 at 13.21.56.jpeg";
import { AiOutlineSearch } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { PiEnvelopeThin } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import army from "../../assets/ndc-color-scheme.png";
import { Link } from "react-router-dom";
 
const Head = () => {
  const [CategoriesMenu, setCategoriesMenu] = useState(false);
  const [menu, setMenu] = useState(false);
  const [moreMenu, setMoreMenu] = useState(false);

  // const handleClick = () => setNav(true);
  const handleMenu = () => setMenu(!menu);
  const handleMoreMenu = () => setMoreMenu(true);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  return (
    <div className="relative  w-full">
      <div className="md:hidden   w-full block">
        <div className="bg-white w-full px-5 ">
          <div className="flex justify-between w-full items-center py-2">
            <AiOutlineSearch className="w-6 h-6 " />

            <a href="/">
              <img className="w-10 h-10" src={logo} alt="/" />
            </a>
            <div className="md:hidden cursor-pointer" onClick={handleMenu}>
              {!menu ? (
                <FiMenu className="w-6 h-6" />
              ) : (
                <AiOutlineClose className="w-7 h-7" />
              )}
            </div>
          </div>
        </div>
        <ul
          className={
            !menu
              ? "hidden"
              : "absolute  z-40 py-5 w-full dark:bg-my-dark bg-[#f5f7f8] md:hidden px-8"
          }
        >
           <div className="flex flex-col gap-4 pt-4">
           <Link to='/' className="text-gray-600  px-[15px] text-[15px]">
                  Home
                </Link>
                <Link to='/about' className="cursor-pointer text-gray-600  px-[15px] text-[15px]">
                  About
                </Link>
                <Link to='/commandant' className="text-gray-600  px-[15px] text-[15px]">
                  Commandant
                </Link>
                <Link to='/gallery' className="text-gray-600  px-[15px] text-[15px]">
               Gallery
                </Link>
        
          </div>
        </ul>
      </div>
      {/* <div className="overlay absolute inset-0 h-screen bg-black opacity-70"></div> */}

      <div className="hidden   w-full md:block">
        <div className="">
          <div className="bg-[#283f68]  w-full">
            {/* <div className=" hidden md:flex w-full border-b items-center justify-end ">
              <div className="flex gap-[25px] items-center  py-[10px] px-[15px] ">
                <a    target="_blank" href="mailto:hq.nais@army.mil.ng" className="text-[#252525] text-[14px] font-sans">
                  Webmail
                </a>
              </div>
            </div> */}
            <div className="flex justify-center">
            <div className="w-full md:max-w-[1000px] ">

           
            <div className="md:flex w-full hidden justify-between items-center py-[5px] px-[15px]">
            
              <div className="py-[11px]">
                <a href="/" >
                <img className="w-16 h-16" src={logo} alt="/" />
                </a>
              </div>
              {/* <div className="flex  w-full items-center"> */}
              <div className="flex items-center">
                {/* <Link to='/' className="text-white  py-[10px] px-[15px] text-[15px]">
                  Home
                </Link>
                <div className="text-white ">|</div> */}
               <Link to='/' className="cursor-pointer hover:text-[#C75F0A] text-white py-[10px] px-[15px] text-[15px]">
            HOME
                </Link>
                <div className="text-white ">|</div>
                <Link to='/about' className="cursor-pointer hover:text-[#C75F0A] text-white py-[10px] px-[15px] text-[15px]">
               ABOUT
              
                </Link>
                <div className="text-white ">|</div>
                <Link to='/commandant' className="text-white hover:text-[#C75F0A] py-[10px] px-[15px] text-[15px]">
                  COMMANDANT
                </Link>
                <div className="text-white ">|</div>
                <div className="text-white hover:text-[#C75F0A] py-[10px] px-[15px] text-[15px]">
                  NEWS
                </div>
                <div className="text-white ">|</div>
                <Link to='/gallery' className="text-white hover:text-[#C75F0A]  py-[10px] px-[15px] text-[15px]">
               GALLERY
                </Link>
                <div className="text-white ">|</div>
                <div className="text-white hover:text-[#C75F0A] py-[10px] px-[15px] text-[15px]">
                  CONTACT US
                </div>
                <div className="text-white py-[6px] px-[20px] rounded-[30px] bg-[#C75F0A]">
                  E-LIBRARY
                </div>
             
              {/* </div> */}

              {/* <div className="flex justify-end gap-3 items-center">
                <button className="py-[0.85em] ml-[15px] px-[1.5em] rounded-[50em] text-[13px] text-white hover:bg-[#337ab7] hover:shadow-lg border-[1px] border-[#ffffff21] ">
                  Download
                </button>
                <AiOutlineSearch className="w-6 h-6 text-white" />
              </div> */}
            </div>
              {/* <div className="flex  gap-[25px]">
                <div className="flex items-center gap-3 py-[10px]">
                  <div>
                    <BsTelephone className="w-8 h-8 text-[#7a263f]" />
                  </div>
                  <div className="flex flex-col ">
                    <div className="flex gap-2">
                    <a
                      href=""
                      className="text-[#0e305d] text-[15px] font-[700] "
                    >
                     09121749848,
                    </a>
                     <a
                      href=""
                      className="text-[#0e305d] text-[15px] font-[700] "
                    >
                     09042751349
                    </a>
                    </div>
                    <h4 className="text-[#686d84] text-[14px] ">
                      Coordination Office
                    </h4>
                  </div>
                </div>

                <div className="flex">
                  <div className="w-[1px] mr-[7px] my-[17px] bg-[#e4e4e4] "></div>
                  <div className="flex items-center gap-3  ml-4 py-[10px]">
                    <div>
                      <CiLocationOn className="w-8 h-8 text-[#7a263f]" />
                    </div>
                    <div className="flex flex-col ">
                      <a
                        href=""
                        className="text-[#0e305d] text-[15px] font-[700] "
                      >
                        Nigerian Army Intelligence School, Tego Barracks, Apapa, Lagos. PMB 1059
                      </a>
                      <h4 className="text-[#686d84] text-[14px] ">
                        Contact Us
                      </h4>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            </div>
            </div>
          </div>
        </div>
        {/* <div className="">
          <div className="md:flex hidden  w-full bg-[#283f68] py-[10px] px-[15px] ">
            <div className="flex justify-between w-full items-center">
              <div className="flex w-full">
                <Link to='/' className="text-white py-[10px] px-[15px] text-[15px]">
                  Home
                </Link>
             
                <Link to='/about' className="cursor-pointer text-white py-[10px] px-[15px] text-[15px]">
                  About
              
                </Link>
                <Link to='/commandant' className="text-white py-[10px] px-[15px] text-[15px]">
                  Commandant
                </Link>
                <div className="text-white py-[10px] px-[15px] text-[15px]">
                  Participants
                </div>
                <div className="text-white py-[10px] px-[15px] text-[15px]">
                  Faculty
                </div>
              
                <div className="text-white py-[10px] px-[15px] text-[15px]">
                  News
                </div>
                <div className="text-white py-[10px] px-[15px] text-[15px]">
                  Library
                </div>
                <div className="text-white py-[10px] px-[15px] text-[15px]">
                  Gallery
                </div>
              
                <div className="text-white py-[10px] px-[15px] text-[15px]">
                  Contact Us
                </div>
              </div>

            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Head;

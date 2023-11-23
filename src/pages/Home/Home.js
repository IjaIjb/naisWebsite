import React from "react";

import { AiOutlineSearch } from "react-icons/ai";

import logo from "../../assets/Webp.net-resizeimage.png";
import HomeAbout from "./HomeAbout";
import Latest from "./Latest";
import HoverCurriculum from "./HoverCurriculum";
import CollegeLead from "./CollegeLead";
import Footer from "./Footer";
import HomeHero from "./HomeHero";
import Head from "../../components/Head/Head";
import HeroDown from "./HeroDown";
import MissionStatement from "./MissionStatement";
import CollegeDocumentary from "./CollegeDocumentary";

const Home = () => {
  return (
    <div>
      <div className="">
        <div className="">
          <div className="flex ">
            <div className="w-full">
              <Head />
              {/* <div className="block md:hidden sticky ">
<Head />
                </div> */}
              <div className="w-full ">
                <HomeHero />
              </div>
              <div className="w-full">
                <HeroDown />
              </div>
              <CollegeLead />
              <div className="bg-[#F0FBFF] pt-16">
                <MissionStatement />
                <div className="px-5">
                  <CollegeDocumentary />
                </div>
                <div className="py-4 bg-white w-full"></div>
                <div className="">
                  <Latest />
                </div>
                <HoverCurriculum />
              </div>
              {/* <div className="px-5 md:px-10">
                    <HomeAbout />
                  </div> */}

              {/* <div className="">
                <CollegeLead />
              </div> */}
              <div className="">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

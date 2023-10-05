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

const Home = () => {
  return (
    <div>
      <div className="mx-auto w-full">
        <div className="h-full w-full md:bg-gray-200">
          <div className="flex w-full h-full justify-center">
            <div className=" w-full md:max-w-[1500px] ">
              <div className="flex ">
                <div className="w-full">
                  <Head />
                  {/* <div className="block md:hidden sticky ">
<Head />
                </div> */}
                  <div className="w-full md:px-10">
                    <HomeHero />
                  </div>
                  <div className="px-5 md:px-10">
                    <HomeAbout />
                  </div>
                  <div className="md:px-10">
                    <Latest />
                  </div>

                  <div className="md:px-10">
                    <HoverCurriculum />
                    <CollegeLead />
                  </div>
                  <div className="md:px-10">
                    <Footer />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

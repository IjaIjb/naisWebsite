import React from "react";
import Head from "../../components/Head/Head";
import Footer from "../Home/Footer";
import AboutNational from "../About/AboutNational";
import AboutVision from "../About/AboutVision";
import AboutHero from "../About/AboutHero";
import NewsNITDAHero from "./NewsNITDAHero";
import NewsNITDAPage from "./NewsNITDAPage";

const NewsNITDA = () => {
  return (
    <div>
      <div className="mx-auto w-full">
        <Head />
        <div className="">
          <NewsNITDAHero />
        </div>
        <div className="h-full w-full md:bg-gray-200">
          <div className="flex w-full h-full justify-center">
            <div className=" w-full md:max-w-[1000px] ">
              <div className="flex ">
                <div className="w-full">
                  <div className=" ">
                    <NewsNITDAPage />
                  </div>
                  {/* <div className=" ">
                    <AboutVision />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default NewsNITDA;

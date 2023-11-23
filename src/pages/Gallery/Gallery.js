import React from "react";
import Head from "../../components/Head/Head";
import GalleryImages from "./GalleryImages";
import Footer from "../Home/Footer";
import GalleryHero from "./GalleryHero";

const Gallery = () => {
  return (
    <div>
      <div className="flex ">
        <div className="w-full">
          <Head />
          <GalleryHero />

          <div className="flex w-full justify-center">
            <div className="w-full md:max-w-[1000px] px-5">
              <GalleryImages />
            </div>
          </div>

          <div></div>
          <div className="">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

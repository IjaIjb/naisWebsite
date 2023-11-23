import React from "react";
import house from "../../assets/IMG-20230826-WA0040_104720.jpg";
import whitec from "../../assets/WhatsApp Image 2023-10-07 at 10.22.14 (1).jpeg";

const GalleryHero = () => {
  return (
    <div>
      <div className="w-full relative z-10 h-full  overflow-hidden ">
        <div className="absolute z-10 object-cover w-full h-full">
          <img className="h-full object-cover  w-full" src={whitec} alt="/" />
          <div className="overlay absolute inset-0 bg-[#283f68] opacity-40"></div>
        </div>
        <div className="flex justify-center text-center relative z-20 h-full md:py-[200px] py-[50px] w-full items-center ">
          <h2 className="text-white leading-[33px] md:leading-[45px] text-[26px] md:text-[35px] font-[600]">
            College Events Gallery
          </h2>
        </div>
      </div>
    </div>
  );
};

export default GalleryHero;

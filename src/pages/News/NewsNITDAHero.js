import React from 'react'
import comdtshake from "../../assets/Home/WhatsApp Image 2023-11-29 at 21.56.18.jpeg";

const NewsNITDAHero = () => {
  return (
    <div>
           <div className="w-full relative z-10 h-full  overflow-hidden ">
        <div className="absolute  z-10 object-cover w-full h-full">
          <img className="h-full object-cover  w-full" src={comdtshake} alt="/" />

          <div className="overlay absolute inset-0 bg-[#283f68] opacity-40"></div>
        </div>
        <div className="flex justify-center text-center relative z-20 h-full md:py-[200px] py-[50px] w-full items-center ">
          <h2 className="text-white leading-[33px] md:leading-[45px] w-full md:max-w-[1000px]  text-[26px] md:text-[35px] font-[600]">
          COMDT NAIS VISIT TO NATIONAL INFORMATION TECHNOLOGY (NITDA)-ABUJA
          </h2>
        </div>
      </div>
    </div>
  )
}

export default NewsNITDAHero
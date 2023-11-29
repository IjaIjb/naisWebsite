import React from 'react'
import comdtstad from "../../assets/Home/WhatsApp Image 2023-11-29 at 21.56.19y.jpeg";
import comdtgift from "../../assets/Home/WhatsApp Image 2023-11-29 at 21.56.19 (1).jpeg";
import comdtsit from "../../assets/Home/WhatsApp Image 2023-11-29 at 21.56.19y6.jpeg";

const NewsNITDAPage = () => {
  return (
    <div>
            <div className="bg-white py-8 px-[15px] md:px-[45px]">
      {/* <div className="flex justify-center text-center">
        <h3 className="text-[#242e64] text-[20px] md:text-[32px] font-[600] leading-[-0.2px] mb-[0.9em] ">
          The Nigerian Army Intelligence School (NAIS) - History and Background
        </h3>
        </div> */}
     
       

        <div className='flex gap-3'>

        <h5 className="text-[#626262] text-[16px] w-full leading-9 font-[400] ">
        The Ag Comdt NAIS, Brig Gen KN Nwoko along with Maj Folayan paid a courtesy visit to National Information Technology Development Agency (NITDA) at 28 Port Harcourt Crescent, Garki, Abuja.
         The Ag Comdt was received by the DG NITDA, Mr Kashifu Abdullahi in his office. The aim of the visit was to discuss areas of cooperation and support which include the establishment of an E-library for NAIS,  provision of specialized trg on Information Technology, infrastructural development among others. The Comdt thanked the DG for the warm reception while the DG promised to look into the request.  The mtg ended at about 1230hrs same day.
        </h5>
        </div>
        <div className='grid grid-cols-3 gap-3'>
        <img className="" src={comdtstad} alt="/" />
          <img className="" src={comdtgift} alt="/" />
          <img className="" src={comdtsit} alt="/" />
        </div>
    </div>
    </div>
  )
}

export default NewsNITDAPage
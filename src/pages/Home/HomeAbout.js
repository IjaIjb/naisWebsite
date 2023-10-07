import React from "react";
import { Link } from "react-router-dom";
import house from "../../assets/WhatsApp Image 2023-10-07 at 10.22.12.jpeg";

const HomeAbout = () => {
  return (
    <div className="bg-white">
      <div className="py-[20px] px-[15px]  border-b-[1px]  ">
        <div className="flex gap-1 text-[#7a263f] text-[16px] font-[400] ">
          <h3>Global</h3>
          <h3>Security</h3>
          <h3>News:</h3>
        </div>
      </div>
      <div className="py-[90px] md:px-[15px]">
        <div className="md:flex md:gap-20 items-center md:justify-between">
          <div className="flex justify-center md:justify-start md:w-full">
            <img className="" src={house} alt="/" />
          </div>
          <div className="max-w-[590px]">
            <h3 className="text-[#242e64] text-[33px] md:text-[45px] font-[600] leading-[1.244em] mb-[0.7em] ">
              {" "}
              About the NAIS – 
            </h3>
            <h5 className="text-[17px] text-[#626262] font-[400]">
              The Nigerian Army Intelligence School (NAIS) has been at the forefront of providing specialized training in intelligence and security-related subjects since its establishment in April 1973. Originally known as the Nigerian Army School of Intelligence (NASI) and located at Tego Barracks, Apapa, the school underwent a name change in 1975 to NAIS, to distinguish it from the Nigerian Army School of Infantry (NASI) in Jaji and to prevent acronym duplication.….{" "}
              <Link to="/about" className="text-[#a7a9b8] ">
                Read More
              </Link>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;

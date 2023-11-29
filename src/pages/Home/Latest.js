import React from "react";
import house3 from "../../assets/IMG_0924_110021.JPG";
import naf015 from "../../assets/Home/WhatsApp Image 2023-11-22 at 16.22.19.jpeg";
import white from "../../assets/WhatsApp Image 2023-10-07 at 10.22.12.jpeg";
import white1 from "../../assets/WhatsApp Image 2023-10-07 at 10.22.09 (1).jpeg";
import wel from "../../assets/Home/WhatsApp Image 2023-11-22 at 16.28.18.jpeg";
import naisFinal from "../../assets/Home/WhatsApp Image 2023-11-22 at 16.31.40 (1).jpeg";
import cham from "../../assets/Home/WhatsApp Image 2023-11-22 at 16.39.15 (1).jpeg";
import ahq from "../../assets/Home/WhatsApp Image 2023-11-22 at 16.46.19 (1).jpeg";
import comdtshake from "../../assets/Home/WhatsApp Image 2023-11-29 at 21.56.19.jpeg";
import exmugu from "../../assets/Home/WhatsApp Image 2023-11-29 at 21.58.54 (1).jpeg";
import { Link } from "react-router-dom";


const Latest = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-full md:max-w-[1000px] ">
          <div className="w-full  pt-[100px] pb-[70px] px-[15px] ">       
                    <h4 className="text-[#3a3a3a] flex justify-center text-center text-[33px] md:text-[42px] font-[600]">
              News & Events
              </h4>
            
              <h4 className="text-[#3a3a3a] flex justify-center text-center text-[14px] pb-3 md:text-[20px] font-[400]">
              Be the first to know the latest news and events of the school
              </h4>


            <div className="grid md:grid-cols-3 gap-[30px]">
              <div className="bg-white shadow-md rounded-t-lg">
                <img
                  className="w-full mb-5 rounded-t-lg"
                  src={naf015}
                  alt="/"
                />
                <div className="px-5 flex justify-center text-center">
                  {" "}
                  <a
                    href=""
                    className="text-[#444444]  text-[18px]  font-[600] hover:underline"
                  >
                    Visit of NAF 015 Strategic Intelligence Group, Ikeja to NAIS
                  </a>
                </div>
              </div>

              <div className="bg-white shadow-md rounded-t-lg">
                <img className="w-full mb-5 rounded-t-lg" src={white} alt="/" />
                <div className="px-5 flex justify-center text-center">
                  {" "}
                  <a
                    href=""
                    className="text-[#444444]  text-[18px]  font-[600] hover:underline"
                  >
                    Pictures from the visit of US SETAF-AF to NAIS
                  </a>
                </div>
              </div>

              <div className="bg-white shadow-md rounded-t-lg">
                <img
                  className="w-full mb-5 rounded-t-lg"
                  src={naisFinal}
                  alt="/"
                />
                <div className="px-5 flex justify-center text-center">
                  <a
                    href=""
                    className="text-[#444444] text-[18px]  font-[600] hover:underline"
                  >
                    Highlights of NAIS final Ex for Third and Fourth Quarter
                    Courses 2023
                  </a>
                </div>
              </div>

              <div className="bg-white shadow-md rounded-t-lg">
                <img className="w-full mb-5 rounded-t-lg" src={cham} alt="/" />
                <div className="px-5 flex justify-center text-center">
                  <a
                    href=""
                    className="text-[#444444] text-[18px]  font-[600] hover:underline"
                  >
                    Highlights of NAIS Ex Chameleon Skin for Third and Fourth
                    Quarter Courses 2023
                  </a>
                </div>
              </div>

              <div className="bg-white shadow-md rounded-t-lg">
                <img className="w-full mb-5 rounded-t-lg" src={ahq} alt="/" />
                <div className="px-5 flex justify-center text-center">
                  <a
                    href=""
                    className="text-[#444444] text-[18px]  font-[600] hover:underline"
                  >
                    Pictures from the visit of AHQ TRADOC NA team to NAIS
                  </a>
                </div>
              </div>

              <div className="bg-white shadow-md rounded-t-lg">
                <img className="w-full mb-5 rounded-t-lg" src={comdtshake} alt="/" />
                <div className="px-5 flex justify-center text-center">
                <Link to='/news-nitda'
                    className="text-[#444444] text-[18px]  font-[600] hover:underline"
                  >
                   COMDT NAIS VISIT TO NATIONAL INFORMATION TECHNOLOGY (NITDA)-ABUJA
                   </Link>
                </div>
              </div>

              
              <div className="bg-white shadow-md rounded-t-lg">
                <img className="w-full mb-5 rounded-t-lg" src={exmugu} alt="/" />
                <div className="px-5 flex justify-center text-center">
                  <a
                    href=""
                    className="text-[#444444] text-[18px]  font-[600] hover:underline"
                  >
                  Comdt NAIS, STAFF AND STUDENT at EX MUGU 2023
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;

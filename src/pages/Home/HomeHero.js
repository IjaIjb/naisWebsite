import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import house from "../../assets/Home/WhatsApp Image 2023-11-27 at 15.19.50.jpeg";
import house1 from "../../assets/WhatsApp Image 2023-10-01 at 04.48.26.jpeg";
import house2 from "../../assets/IMG_8035_104918.JPG";
import house3 from "../../assets/IMG_0924_110021.JPG";
import white from "../../assets/WhatsApp Image 2023-10-07 at 10.22.12.jpeg";
import white1 from "../../assets/WhatsApp Image 2023-10-07 at 10.22.09 (1).jpeg";
import white2 from "../../assets/WhatsApp Image 2023-10-07 at 10.22.14 (2).jpeg";
import white3 from "../../assets/WhatsApp Image 2023-10-07 at 10.22.14 (1).jpeg";

const HomeHero = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div>
      <div className="w-full relative  ">
        {/* <Carousel
          swipeable={true}
          draggable={true}
          rtl={true}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          keyBoardControl={true}
          transitionDuration={5000}
          containerclassName="carousel-container"
          removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
          dotListclassName="custom-dot-list-style"
          itemclassName="carousel-item-padding-40-px"
        > */}
                      {/* <div className="absolute  object-cover w-full h-full"> */}
        
          <div className="w-full relative z-10 h-screen  overflow-hidden ">
            <div className="absolute z-10 object-cover w-full h-full">
              <img
                className="h-full object-cover  w-full"
                src={house}
                alt="/"
              />
              <div className="overlay absolute inset-0 bg-[#283f68] opacity-30"></div>
            </div>
            <div className="flex relative z-20 h-full w-full items-center ">
              <div className="md:pl-20 pl-5 pb-20 w-full">
                <div className="flex gap-[40px] w-full text-center justify-center items-center">
                  <div className=" w-full">
                    <h2 className="text-white leading-[33px] md:leading-[45px] text-[26px] md:text-[35px] font-[600]">
                      Nigerian Army Intelligence School
                    </h2>

                    <div className=" w-full mt-6 ">
                      {/* <div className="flex text-center items-center  justify-center"> */}
                    {/* </div> */}
                    {/* <div className="flex justify-center text-center items-center text-white py-[1px] max-w-[200px] bg-white"></div> */}
                      <div className="flex justify-center gap-2">
                        
                        <h2 className="text-white leading-[33px] md:leading-[45px] text-[20px] md:text-[35px] font-[600]">KNOWLEDGE</h2>
                        <h2 className="text-white leading-[33px] md:leading-[45px] text-[20px] md:text-[35px] font-[600] border-x">DEDICATION</h2>
                        <h2 className="text-white leading-[33px] md:leading-[45px] text-[20px] md:text-[35px] font-[600]">SERVICE</h2>

                      </div>
                      {/* <a
                        href=""
                        className="bg-[#7a263f] hover:bg-white hover:text-black text-white rounded-[3px] text-[13px]  md:text-[17px] font-[500] py-[10px] md:py-[18px] px-[20px] md:px-[35px] text-left w-fit"
                      >
                        Learn more
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="overlay absolute inset-0 bg-black opacity-70"></div> */}
{/* </div> */}
{/* 

          <div className="w-full relative z-10 h-screen  overflow-hidden ">
            <div className="absolute z-10 object-cover w-full h-full">
              <img
                className="h-full object-cover  w-full"
                src={white}
                alt="/"
              />
              <div className="overlay absolute inset-0 bg-black opacity-30"></div>
            </div>
            <div className="flex relative z-20 h-full w-full items-center ">
              <div className="pl-20 pb-20 w-full">
                <div className="flex gap-[40px] w-full justify-start items-center">
                  <div className="text-left w-full">
                    <h2 className="text-white leading-[33px] md:leading-[45px] text-[26px] md:text-[35px] font-[600]">
                      Nigerian Army Intelligence School-Tego Barracks, Apapa,
                      Lagos
                    </h2>

                    <div className=" gap-[12px] text-left w-full pt-6 text-white">
                      <h4 className="text-[16px] md:text-[20px] font-[400]">
                        One of our key objectives is to study the socio-economic
                        and political <br /> environment of Nigeria and its
                        impacts on national security and <br /> development
                      </h4>
                    </div>
                    <div className="text-left w-full mt-6">
                      <a
                        href=""
                        className="bg-[#7a263f] hover:bg-white hover:text-black text-white rounded-[3px]  text-[17px] font-[500] py-[18px] px-[35px] text-left w-fit"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full relative z-10 h-screen  overflow-hidden ">
            <div className="absolute z-10 object-cover w-full h-full">
              <img
                className="h-full object-cover  w-full"
                src={white1}
                alt="/"
              />
              <div className="overlay absolute inset-0 bg-black opacity-30"></div>
            </div>
            <div className="flex relative z-20 h-full w-full items-center ">
              <div className="pl-20 pb-20 w-full">
                <div className="flex gap-[40px] w-full justify-start items-center">
                  <div className="text-left w-full">
                    <h2 className="text-white leading-[33px] md:leading-[45px] text-[26px] md:text-[35px] font-[600]">
                      Nigerian Army Intelligence School-Tego Barracks, Apapa,
                      Lagos
                    </h2>

                    <div className=" gap-[12px] text-left w-full pt-6 text-white">
                      <h4 className="text-[16px] md:text-[20px] font-[400]">
                        One of our key objectives is to study the socio-economic
                        and political <br /> environment of Nigeria and its
                        impacts on national security and <br /> development
                      </h4>
                    </div>
                    <div className="text-left w-full mt-6">
                      <a
                        href=""
                        className="bg-[#7a263f] hover:bg-white hover:text-black text-white rounded-[3px]  text-[17px] font-[500] py-[18px] px-[35px] text-left w-fit"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full relative z-10 h-screen  overflow-hidden ">
            <div className="absolute z-10 object-cover w-full h-full">
              <img
                className="h-full object-cover  w-full"
                src={white2}
                alt="/"
              />
              <div className="overlay absolute inset-0 bg-black opacity-30"></div>
            </div>
            <div className="flex relative z-20 h-full w-full items-center ">
              <div className="pl-20 pb-20 w-full">
                <div className="flex gap-[40px] w-full justify-start items-center">
                  <div className="text-left w-full">
                    <h2 className="text-white leading-[33px] md:leading-[45px] text-[26px] md:text-[35px] font-[600]">
                      Nigerian Army Intelligence School-Tego Barracks, Apapa,
                      Lagos
                    </h2>

                    <div className=" gap-[12px] text-left w-full pt-6 text-white">
                      <h4 className="text-[16px] md:text-[20px] font-[400]">
                        One of our key objectives is to study the socio-economic
                        and political <br /> environment of Nigeria and its
                        impacts on national security and <br /> development
                      </h4>
                    </div>
                    <div className="text-left w-full mt-6">
                      <a
                        href=""
                        className="bg-[#7a263f] hover:bg-white hover:text-black text-white rounded-[3px]  text-[17px] font-[500] py-[18px] px-[35px] text-left w-fit"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full relative z-10 h-screen  overflow-hidden ">
            <div className="absolute z-10 object-cover w-full h-full">
              <img
                className="h-full object-cover  w-full"
                src={white3}
                alt="/"
              />
              <div className="overlay absolute inset-0 bg-black opacity-30"></div>
            </div>
            <div className="flex relative z-20 h-full w-full items-center ">
              <div className="pl-20 pb-20 w-full">
                <div className="flex gap-[40px] w-full justify-start items-center">
                  <div className="text-left w-full">
                    <h2 className="text-white leading-[33px] md:leading-[45px] text-[26px] md:text-[35px] font-[600]">
                      Nigerian Army Intelligence School-Tego Barracks, Apapa,
                      Lagos
                    </h2>

                    <div className=" gap-[12px] text-left w-full pt-6 text-white">
                      <h4 className="text-[16px] md:text-[20px] font-[400]">
                        One of our key objectives is to study the socio-economic
                        and political <br /> environment of Nigeria and its
                        impacts on national security and <br /> development
                      </h4>
                    </div>
                    <div className="text-left w-full mt-6">
                      <a
                        href=""
                        className="bg-[#7a263f] hover:bg-white hover:text-black text-white rounded-[3px]  text-[17px] font-[500] py-[18px] px-[35px] text-left w-fit"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full relative z-10 h-screen  overflow-hidden ">
            <div className="absolute z-10 object-cover w-full h-full">
              <img
                className="h-full object-cover  w-full"
                src={house1}
                alt="/"
              />
              <div className="overlay absolute inset-0 bg-black opacity-30"></div>
            </div>
            <div className="flex relative z-20 h-full w-full items-center ">
              <div className="pl-20 pb-20 w-full">
                <div className="flex gap-[40px] w-full justify-start items-center">
                  <div className="text-left w-full">
                    <h2 className="text-white leading-[33px] md:leading-[45px] text-[26px] md:text-[35px] font-[600]">
                      Nigerian Army Intelligence School-Tego Barracks, Apapa,
                      Lagos
                    </h2>

                    <div className=" gap-[12px] text-left w-full pt-6 text-white">
                      <h4 className="text-[16px] md:text-[20px] font-[400]">
                        One of our key objectives is to study the socio-economic
                        and political <br /> environment of Nigeria and its
                        impacts on national security and <br /> development
                      </h4>
                    </div>
                    <div className="text-left w-full mt-6">
                      <a
                        href=""
                        className="bg-[#7a263f] hover:bg-white hover:text-black text-white rounded-[3px]  text-[17px] font-[500] py-[18px] px-[35px] text-left w-fit"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full relative z-10 h-screen  overflow-hidden ">
            <div className="absolute z-10 object-cover w-full h-full">
              <img
                className="h-full object-cover  w-full"
                src={house3}
                alt="/"
              />
              <div className="overlay absolute inset-0 bg-black opacity-30"></div>
            </div>
            <div className="flex relative z-20 h-full w-full items-center ">
              <div className="pl-20 pb-20 w-full">
                <div className="flex gap-[40px] w-full justify-start items-center">
                  <div className="text-left w-full">
                    <h2 className="text-white leading-[33px] md:leading-[45px] text-[26px] md:text-[35px] font-[600]">
                      Nigerian Army Intelligence School-Tego Barracks, Apapa,
                      Lagos
                    </h2>

                    <div className=" gap-[12px] text-left w-full pt-6 text-white">
                      <h4 className="text-[16px] md:text-[20px] font-[400]">
                        One of our key objectives is to study the socio-economic
                        and political <br /> environment of Nigeria and its
                        impacts on national security and <br /> development
                      </h4>
                    </div>
                    <div className="text-left w-full mt-6">
                      <a
                        href=""
                        className="bg-[#7a263f] hover:bg-white hover:text-black text-white rounded-[3px]  text-[17px] font-[500] py-[18px] px-[35px] text-left w-fit"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        {/* </Carousel> */}
      </div>
    </div>
  );
};

export default HomeHero;

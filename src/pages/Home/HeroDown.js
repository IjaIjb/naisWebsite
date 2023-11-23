import React from "react";
import com from "../../assets/IMG-20230808-WA0000_105656.jpg";

const HeroDown = () => {
  return (
    <div>
      <div className="bg-[#F0FBFF] pb-5">
        <div className="flex justify-center">
          <div className="lg:block hidden w-full lg:max-w-[1000px] max-w-[300px] ">
            <div className="bg-[#283f68] p-3  mt-3 mb-6 w-full">
              <div className="grid grid-cols-5 gap-1 lg:gap-2">
                <img
                  // decoding="async"
                  // class="ha-slick-img"
                  src="https://awcn.army.mil.ng/wp-content/uploads/2023/06/Tinubu-1.jpg"
                  alt=""
                  className=" w-full  "
                />

                <img
                  // decoding="async"
                  // class="ha-slick-img"
                  src="https://awcn.army.mil.ng/wp-content/uploads/2023/09/mohammed_badaru_abubakar-831x1024-1-243x300.jpg"
                  alt=""
                  className=" w-full h-full "
                />
                <img
                  className=" w-full h-full"
                  // decoding="async"
                  // class="ha-slick-img"
                  src="https://awcn.army.mil.ng/wp-content/uploads/2023/09/Gen-CG-Musa.jpeg"
                  alt=""
                />

                <img
                  className=" w-full h-full"
                  // decoding="async"
                  // class="ha-slick-img"
                  src="https://awcn.army.mil.ng/wp-content/uploads/2023/08/COAS-243x300.jpg"
                  alt=""
                />

                <img className=" w-full  h-full" src={com} />
              </div>
            </div>
          </div>

          <div className=" block lg:hidden w-full px-5 ">
            <div className="bg-[#283f68] p-1.5  mt-3 mb-6 w-full">
              <div className="grid grid-cols-5 gap-1.5 lg:gap-2">
                <img
                  decoding="async"
                  class="ha-slick-img"
                  src="https://awcn.army.mil.ng/wp-content/uploads/2023/06/Tinubu-1.jpg"
                  alt=""
                  // width="50px"
                  className="block w-full h-full "
                  // height="100px"
                />

                <img
                  decoding="async"
                  class="ha-slick-img"
                  src="https://awcn.army.mil.ng/wp-content/uploads/2023/09/mohammed_badaru_abubakar-831x1024-1-243x300.jpg"
                  alt=""
                  className="w-full h-full"
                  // width="50px"
                />
                <img
                  className=" w-full h-full"
                  decoding="async"
                  class="ha-slick-img"
                  src="https://awcn.army.mil.ng/wp-content/uploads/2023/09/Gen-CG-Musa.jpeg"
                  alt=""
                />

                <img
                  className="block w-full h-full"
                  decoding="async"
                  class="ha-slick-img"
                  src="https://awcn.army.mil.ng/wp-content/uploads/2023/08/COAS-243x300.jpg"
                  alt=""
                />
                <img className="block w-full h-full " src={com} />
              </div>
            </div>
          </div>
        </div>
        <div className="md:py-3 py-1 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] border mx-5">
          <marquee
            className="text-[#c75f0a] text-[16px] md:text-[2em]"
            direction="left"
            scrollamount="5"
            behavior="scroll"
          >
            Welcome To Nigeria Army Intelligence School. The Nigeria Army
            Intelligence School is the premier Nigerian Army educational
            institution concentrating on operational art, military leadership,
            strategy, and inter-agency cooperation. Call Us: 09121749848, 09042751349
          </marquee>
        </div>
      </div>
    </div>
  );
};

export default HeroDown;

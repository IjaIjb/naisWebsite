import React from "react";
import com from "../../assets/IMG-20230808-WA0000_105656.jpg";

const HeroDown = () => {
  return (
    <div>
      <div className="bg-[#F0FBFF]">
        <div className="flex justify-center">
          <div className="w-full md:max-w-[1000px] ">
            <div className="bg-[#166432] p-3 mt-3 mb-6 w-full">
              <div className="flex gap-2">
                <img
                  decoding="async"
                  class="ha-slick-img"
                  src="https://awcn.army.mil.ng/wp-content/uploads/2023/06/Tinubu-1.jpg"
                  alt=""
                />

                <img
                  decoding="async"
                  class="ha-slick-img"
                  src="https://awcn.army.mil.ng/wp-content/uploads/2023/09/mohammed_badaru_abubakar-831x1024-1-243x300.jpg"
                  alt=""
                />
                <img
                  className="md:block hidden w-[300px] h-[300px]"
                  src={com}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDown;

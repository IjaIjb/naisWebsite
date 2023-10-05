import React from "react";
import { GrNotes } from "react-icons/gr";
import { BsYoutube } from "react-icons/bs";


const HoverCurriculum = () => {
  return (
    <div>
      <div className="bg-white pt-[100px] pb-[70px] px-[30px]">
        <div className="grid md:grid-cols-4 gap-[30px]">
          <div className="bg-white h-[250px] rounded-lg flex justify-center items-center text-center shadow-2xl">
            <div>
              <div className="flex justify-center rounded-lg">
                <GrNotes className="w-7 h-7 flex justify-center text-center" />
              </div>
              <h5 className="text-[#242e64] mt-4 text-[16px]">Curriculum</h5>
            </div>
          </div>

          <div className="bg-white h-[250px] rounded-lg flex justify-center items-center text-center shadow-2xl">
            <div>
              <div className="flex justify-center rounded-lg">
                <BsYoutube className="w-7 h-7 flex justify-center text-center" />
              </div>
              <h5 className="text-[#242e64] mt-4 text-[16px]">NDC Youtube Channel</h5>
            </div>
          </div>

          <div className="bg-white h-[250px] rounded-lg flex justify-center items-center text-center shadow-2xl">
            <div>
              <div className="flex justify-center rounded-lg">
                <GrNotes className="w-7 h-7 flex justify-center text-center" />
              </div>
              <h5 className="text-[#242e64] mt-4 text-[16px]">Library Resources</h5>
            </div>
          </div>

          <div className="bg-white h-[250px] rounded-lg flex justify-center items-center text-center shadow-2xl">
            <div>
              <div className="flex justify-center rounded-lg">
                <GrNotes className="w-7 h-7 flex justify-center text-center" />
              </div>
              <h5 className="text-[#242e64] mt-4 text-[16px]">Resources & Downloads</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverCurriculum;

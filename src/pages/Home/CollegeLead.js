import React from "react";
import { Link } from "react-router-dom";
import com from "../../assets/IMG-20230808-WA0000_105656.jpg";
import house from "../../assets/WhatsApp Image 2023-11-22 at 16.46.19.jpeg";

const CollegeLead = () => {
  return (
    <div className="w-full relative z-10 verflow-hidden">
      <div className="absolute z-10 object-cover w-full h-full">
        <img className="h-full object-cover  w-full" src={house} alt="/" />
        <div className="overlay absolute inset-0 bg-[#283f68] opacity-40"></div>
      </div>
      <div className="flex relative z-20 h-full w-full justify-center">
        <div className="lg:block hidden w-full md:max-w-[1000px] ">
          <div className="bg-white rounded-[5px] my-3 px-[30px] md:px-[45px] ">
            <div className="md:flex justify-between gap-[20px] items-center">
              <div className=" py-[45px] flex flex-col ">
                <h3 className="text-[#242e64] text-[16px] pb-5  font-[600]  ">
                  Meet the College Commandant
                </h3>

                <h3 className="text-[#626262] text-[16px] pb-5  font-[400]  ">
                  <b>Brig Gen Kingsley Nwanne Nwoko</b>
                </h3>
                <Link
                  to="/commandant"
                  className="text-white rounded-[5px] py-2 w-full text-center bg-[#283f68]"
                >
                  Read More
                </Link>
              </div>

              <div className="">
                <img className="w-[400px] h-[400px] " src={com} />
              </div>
              {/* <div className=" py-[45px] md:px-[55px] px-5 max-w-[680px]">
              <h3 className="text-[#242e64] text-[16px] pb-5  font-[600]  ">
              Brig Gen KN Nwoko  –
                Commandant
              </h3>

              <h3 className="text-[#626262] text-[16px] pb-5  font-[400]  ">
              <b>Brig Gen Kingsley Nwanne Nwoko</b> was born in Kaduna state and from Delta state, Aniocha North Local Government Area, He attended KLG Primary School Kaduna in 1979-1985 where he got his First School Leaving Certificate, He got his West African Examination Council Senior Secondary Certificate from Kaduna Capital School, Kaduna State 1985-1991.…{" "}
                <Link to='/commandant' className="text-[#a7a9b8] ">
                  Read More
                </Link>
              </h3>
            </div> */}
            </div>
          </div>
          {/* <div className="md:flex justify-between  border-[#77263eb3] rounded-r-[5px]  border-[2px]   ">
            <div>picture</div>
            <div className=" py-[45px] px-[55px] max-w-[380px]">
              <h3 className="text-[#242e64] text-[16px] pb-5  font-[600]  ">
                Maj Gen LA FEJOKWU DSS psc fdc(+) ndc(K) CM FCM NAPH MA CCA FCMH
                – Deputy Commandant
              </h3>

              <h3 className="text-[#626262] text-[16px] pb-5  font-[400]  ">
                Major General Lawrence Ayaegbunem Fejokwu was born on 9 February
                1968 in Onicha – Ugbo, Delta State. He attended{" "}
                <a href="/" className="text-[#a7a9b8] ">
                  Read More
                </a>
              </h3>
            </div>
          </div> */}
        </div>

        <div className="block lg:hidden w-full px-5 ">
          <div className="bg-white rounded-[5px] my-3 ">
            <div className="md:flex justify-between gap-[20px] items-center">
              <div className="">
                <img className="w-[400px] h-[400px] " src={com} />
              </div>
              <div className=" py-[45px] flex flex-col px-5">
                <h3 className="text-[#242e64] text-center text-[26px] leading-8 pb-4  font-[600] uppercase ">
                  Meet the College Commandant
                </h3>

                <h3 className="text-[#626262] text-center text-[16px] pb-4  font-[400]  ">
                  <b>Brig Gen Kingsley Nwanne Nwoko</b>
                </h3>
                <Link
                  to="/commandant"
                  className="text-white rounded-[5px] py-2 w-full text-center bg-[#283f68]"
                >
                  Read More
                </Link>
              </div>

              {/* <div className=" py-[45px] md:px-[55px] px-5 max-w-[680px]">
              <h3 className="text-[#242e64] text-[16px] pb-5  font-[600]  ">
              Brig Gen KN Nwoko  –
                Commandant
              </h3>

              <h3 className="text-[#626262] text-[16px] pb-5  font-[400]  ">
              <b>Brig Gen Kingsley Nwanne Nwoko</b> was born in Kaduna state and from Delta state, Aniocha North Local Government Area, He attended KLG Primary School Kaduna in 1979-1985 where he got his First School Leaving Certificate, He got his West African Examination Council Senior Secondary Certificate from Kaduna Capital School, Kaduna State 1985-1991.…{" "}
                <Link to='/commandant' className="text-[#a7a9b8] ">
                  Read More
                </Link>
              </h3>
            </div> */}
            </div>
          </div>
          {/* <div className="md:flex justify-between  border-[#77263eb3] rounded-r-[5px]  border-[2px]   ">
            <div>picture</div>
            <div className=" py-[45px] px-[55px] max-w-[380px]">
              <h3 className="text-[#242e64] text-[16px] pb-5  font-[600]  ">
                Maj Gen LA FEJOKWU DSS psc fdc(+) ndc(K) CM FCM NAPH MA CCA FCMH
                – Deputy Commandant
              </h3>

              <h3 className="text-[#626262] text-[16px] pb-5  font-[400]  ">
                Major General Lawrence Ayaegbunem Fejokwu was born on 9 February
                1968 in Onicha – Ugbo, Delta State. He attended{" "}
                <a href="/" className="text-[#a7a9b8] ">
                  Read More
                </a>
              </h3>
            </div>
          </div> */}
        </div>

        {/* <div className="flex justify-center text-center pt-[50px] ">
<h5 className="text-[#626262] text-[16px] font-[400] ">See all our <a href="" className="text-[#a7a9b8] hover:text-[#626262] " >academic directors</a></h5>
        </div> */}
      </div>
    </div>
  );
};

export default CollegeLead;

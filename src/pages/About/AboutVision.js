import React from 'react'
import { Disclosure } from "@headlessui/react";
import { BiChevronDown   } from 'react-icons/bi';

const AboutVision = () => {
  return (
    <div className="bg-[#f4f4f4] pt-[120px] pb-[100px] px-[30px]">
        <div>

   {/*Mobile view */}
   <div className="hidden  bg-[#166432]">
          <div className="border-2 rounded-md">
        

       
       
          </div>
        </div>
        {/*Mobile view}

        {/*Desktop view*/}
        <div className="flex">
      

          <div id="WalletsFAQs" name="getstarted" className=" rounded-md  w-full">
            <div className="bg-white text-[#39374d] mb-6 rounded-[4px] ">
              <Disclosure className="">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="text-[#39374d] flex w-full justify-between px-4 py-5 text-left text-sm font-medium   ">
                      <span>
                      VISION

                      </span>
                      <BiChevronDown
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 `}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="  px-4 pt-4 pb-2 text-sm text-gray-500">
                    To produce intelligence professionals who are highly competent, technologically savvy and poised to address contemporary threat. </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
             
           
            <div className="bg-white text-[#39374d] mb-6 rounded-[4px]">
              <Disclosure className="">
                {({ open }) => (
                  <>
                    <Disclosure.Button className=" flex w-full justify-between px-4 py-5 text-left text-sm font-medium  focus:outline-text-pink-700 focus-visible:ring focus-visible:ring-pink-700 focus-visible:ring-opacity-75">
                      <span>
                      MISSION
                      </span>
                      <BiChevronDown  
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 `}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="  px-4 pt-4 pb-2 text-sm text-gray-500">
                    To provide the highest level of  intelligence and security training for the Nigerian Army and other security agencies. 
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
            <div className="bg-white text-[#39374d] mb-6 rounded-[4px]">
              <Disclosure className="">
                {({ open }) => (
                  <>
                    <Disclosure.Button className=" flex w-full justify-between px-4 py-5 text-left text-sm font-medium  focus:outline-text-pink-700 focus-visible:ring focus-visible:ring-pink-700 focus-visible:ring-opacity-75">
                      <span>
                      PHILOSOPHY OF NAIS

                      </span>
                      <BiChevronDown  
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 `}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="  px-4 pt-4 pb-2 text-sm text-gray-500">
                    The philosophy of the School is to groom all NAIC and non-NAIC personnel in all intelligence-related matters to attain professional competence with the ability to interpret and analyse events in order to make future projections. Also, the School continues to produce Intelligence Officers capable and ready to carry out all assigned tasks as well as conduct intelligence operations. </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>

            <div className="bg-white text-[#39374d] mb-6 rounded-[4px]">
              <Disclosure className="">
                {({ open }) => (
                  <>
                    <Disclosure.Button className=" flex w-full justify-between px-4 py-5 text-left text-sm font-medium  focus:outline-text-pink-700 focus-visible:ring focus-visible:ring-pink-700 focus-visible:ring-opacity-75">
                      <span>
                      NAIS VALUES 

                      </span>
                      <BiChevronDown  
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 `}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="  px-4 pt-4 pb-2 text-sm text-gray-500">
    <li>Accuracy: Ensuring that intelligence information is reliable, precise, and free from bias, enabling effective decision-making. </li>            
 
<li>Objectivity: Remaining impartial and unbiased in the collection, analysis, and dissemination of intelligence, focusing solely on facts and evidence.</li>
<li>Integrity: Conducting intelligence activities with honesty, ethics, and adherence to legal and regulatory frameworks, maintaining public trust.</li>
<li>Confidentiality: Safeguarding sensitive intelligence information to protect sources, methods, and national security interests.</li>
<li>Adaptability: Being able to quickly adjust intelligence strategies, techniques, and operations in response to rapidly changing threats and environments.</li>
<li>Teamwork: Collaborating and cooperating with intelligence partners, agencies, and stakeholders to achieve shared objectives and enhance collective intelligence capabilities.</li>
<li>Initiative: Taking proactive measures to anticipate intelligence needs, identify emerging threats, and provide timely information to decision-makers.</li>
<li>Flexibility: Being open-minded and agile in intelligence operations, willing to explore different approaches and adapt to new methodologies and technologies.</li>
<li>Professionalism: Conducting oneself with respect, discipline, and competence in all intelligence-related activities, reflecting the highest standards of the profession.</li>
<li> Diligence: Demonstrating persistence, thoroughness, and attention to detail in intelligence gathering, analysis, and reporting.</li>
<li> Accountability: Accepting responsibility for one's actions and decisions in intelligence operations, acknowledging and learning from mistakes.</li>
<li> Collaboration: Working in partnership and cooperation with other intelligence organizations, agencies, and international partners to enhance collective intelligence efforts.</li>
<li> Timeliness: Providing intelligence information in a timely manner, enabling decision-makers to take timely and effective action.</li>
<li> Continual Learning: Embracing a culture of continuous learning and professional development in intelligence, staying updated on new techniques, methodologies, and technological advancements.</li>
<li> Comprehensiveness: Providing a holistic and comprehensive understanding of intelligence subjects and environments, considering multiple sources and perspectives in analysis.</li>
                
                </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
            
          </div>  

        </div>
        </div>
    </div>
  )
}

export default AboutVision
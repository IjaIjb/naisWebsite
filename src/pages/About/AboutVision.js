import React from 'react'
import { Disclosure } from "@headlessui/react";
import { BiChevronDown   } from 'react-icons/bi';

const AboutVision = () => {
  return (
    <div className="bg-[#f4f4f4] pt-[120px] pb-[100px] px-[30px]">
        <div>

   {/*Mobile view */}
   <div className="hidden">
          <div className="border-2 rounded-md">
            <div className="border-b">
              <Disclosure className="">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="active:text-pink-700 focus:text-pink-700 flex w-full justify-between px-4 py-5 text-left text-sm font-medium  focus:outline-text-pink-700 focus-visible:ring focus-visible:ring-pink-700 focus-visible:ring-opacity-75">
                      <span className="text-lg font-bold">Wallets FAQs</span>
                      <BiChevronDown  
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-pink-700`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-sm">
                    <div className="flush border-b">
                        <Disclosure className="">
                          {({ open }) => (
                            <>
                              <Disclosure.Button className=" flex w-full justify-between px-4 py-5 text-left text-sm font-medium  focus:outline-text-pink-700 focus-visible:ring focus-visible:ring-pink-700 focus-visible:ring-opacity-75">
                                <span>
                                How long does it take for payment to be processed on Vella?

                                </span>
                                <BiChevronDown  
                                  className={`${
                                    open ? "rotate-180 transform" : ""
                                  } h-5 w-5 text-pink-700`}
                                />
                              </Disclosure.Button>
                              <Disclosure.Panel className="  px-4 pt-4 pb-2 text-sm text-gray-500">
                              Money transfer using Vella is swift. Vella to Vella transfers are processed immediately. Money transfer with Global wire transfer takes 1-3 days to complete.

                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      </div>
                      <div className="flush border-b">
                        <Disclosure className="">
                          {({ open }) => (
                            <>
                              <Disclosure.Button className=" flex w-full justify-between px-4 py-5 text-left text-sm font-medium  focus:outline-text-pink-700 focus-visible:ring focus-visible:ring-pink-700 focus-visible:ring-opacity-75">
                                <span>
                                What is Vella’s transaction rate?
                                </span>
                                <BiChevronDown  
                                  className={`${
                                    open ? "rotate-180 transform" : ""
                                  } h-5 w-5 text-pink-700`}
                                />
                              </Disclosure.Button>
                              <Disclosure.Panel className="  px-4 pt-4 pb-2 text-sm text-gray-500">
                              Transactions between Vella users are free. Vella charges minimal fees on all other transactions.</Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      </div>
                      <div className="flush border-b">
                        <Disclosure className="">
                          {({ open }) => (
                            <>
                              <Disclosure.Button className=" flex w-full justify-between px-4 py-5 text-left text-sm font-medium  focus:outline-text-pink-700 focus-visible:ring focus-visible:ring-pink-700 focus-visible:ring-opacity-75">
                                <span>
                                Can I fund my wallet with Bank Transfer? 
                                </span>
                                <BiChevronDown  
                                  className={`${
                                    open ? "rotate-180 transform" : ""
                                  } h-5 w-5 text-pink-700`}
                                />
                              </Disclosure.Button>
                              <Disclosure.Panel className="  px-4 pt-4 pb-2 text-sm text-gray-500">
                              Yes, you can fund your wallet via Bank Transfer. All you have to do is make a transfer to the bank details provided in the “Pay with Bank Transfer” option and upload proof of payment to fund your wallet successfully. 
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>

            <div className="border-b">
              <Disclosure className="">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="active:text-pink-700 focus:text-pink-700 flex w-full justify-between px-4 py-5 text-left text-sm font-medium  focus:outline-text-pink-700 focus-visible:ring focus-visible:ring-pink-700 focus-visible:ring-opacity-75">
                      <span className="text-lg font-bold">Global wire transfer FAQs</span>
                      <BiChevronDown  
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-pink-700`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="  text-sm">
                    <div className="flush border-b">
                        <Disclosure className="">
                          {({ open }) => (
                            <>
                              <Disclosure.Button className=" flex w-full justify-between px-4 py-5 text-left text-sm font-medium  focus:outline-text-pink-700 focus-visible:ring focus-visible:ring-pink-700 focus-visible:ring-opacity-75">
                                <span>
                                Can I transfer money to Cameroon, Ghana, or other African countries?

                                </span>
                                <BiChevronDown  
                                  className={`${
                                    open ? "rotate-180 transform" : ""
                                  } h-5 w-5 text-pink-700`}
                                />
                              </Disclosure.Button>
                              <Disclosure.Panel className="  px-4 pt-4 pb-2 text-sm text-gray-500">
                               Yes
                               </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      </div>
                      <div className="flush border-b">
                        <Disclosure className="">
                          {({ open }) => (
                            <>
                              <Disclosure.Button className=" flex w-full justify-between px-4 py-5 text-left text-sm font-medium  focus:outline-text-pink-700 focus-visible:ring focus-visible:ring-pink-700 focus-visible:ring-opacity-75">
                                <span>
                                What is my daily transfer limit?
                                </span>
                                <BiChevronDown  
                                  className={`${
                                    open ? "rotate-180 transform" : ""
                                  } h-5 w-5 text-pink-700`}
                                />
                              </Disclosure.Button>
                              <Disclosure.Panel className="  px-4 pt-4 pb-2 text-sm text-gray-500">
                              There’s no transfer limit provided you have completed your verification.
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      </div>
                      <div className="flush border-b">
                        <Disclosure className="">
                          {({ open }) => (
                            <>
                              <Disclosure.Button className=" flex w-full justify-between px-4 py-5 text-left text-sm font-medium  focus:outline-text-pink-700 focus-visible:ring focus-visible:ring-pink-700 focus-visible:ring-opacity-75">
                                <span>
                                Can I send money to other African Countries?

                                </span>
                                <BiChevronDown  
                                  className={`${
                                    open ? "rotate-180 transform" : ""
                                  } h-5 w-5 text-pink-700`}
                                />
                              </Disclosure.Button>
                              <Disclosure.Panel className="  px-4 pt-4 pb-2 text-sm text-gray-500">
                              Yes, you can send money using the Global wire transfer to other African countries, provided the receiver owns a USD domiciled account.

                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>

            <div className="border-b">
              <Disclosure className="">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="active:text-pink-700 focus:text-pink-700 flex w-full justify-between px-4 py-5 text-left text-sm font-medium  focus:outline-text-pink-700 focus-visible:ring focus-visible:ring-pink-700 focus-visible:ring-opacity-75">
                      <span className="text-lg font-bold">Transfer</span>
                      <BiChevronDown  
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-pink-700`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="     text-sm ">
                      <div className="flush border-b">
                        <Disclosure className="">
                          {({ open }) => (
                            <>
                              <Disclosure.Button className=" flex w-full justify-between px-4 py-5 text-left text-sm font-medium  focus:outline-text-pink-700 focus-visible:ring focus-visible:ring-pink-700 focus-visible:ring-opacity-75">
                                <span>
                                Will I need to upload my international passport on Vella before making international transfers? 
                                </span>
                                <BiChevronDown  
                                  className={`${
                                    open ? "rotate-180 transform" : ""
                                  } h-5 w-5 text-pink-700`}
                                />
                              </Disclosure.Button>
                              <Disclosure.Panel className="  px-4 pt-4 pb-2 text-sm text-gray-500">
                              You will need to complete your verifications to make international wire transfers

                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      </div>
                      
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>

            <div className="border-b">
              <Disclosure className="">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="active:text-pink-700 focus:text-pink-700 flex w-full justify-between px-4 py-5 text-left text-sm font-medium  focus:outline-text-pink-700 focus-visible:ring focus-visible:ring-pink-700 focus-visible:ring-opacity-75">
                      <span className="text-lg font-bold">Pay merchants</span>
                      <BiChevronDown  
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-pink-700`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-sm ">
                    <div className="flush border-b">
                        <Disclosure className="">
                          {({ open }) => (
                            <>
                              <Disclosure.Button className=" flex w-full justify-between px-4 py-5 text-left text-sm font-medium  focus:outline-text-pink-700 focus-visible:ring focus-visible:ring-pink-700 focus-visible:ring-opacity-75">
                                <span>
                                What wallet do I fund to pay my Chinese merchants? 

                                </span>
                                <BiChevronDown  
                                  className={`${
                                    open ? "rotate-180 transform" : ""
                                  } h-5 w-5 text-pink-700`}
                                />
                              </Disclosure.Button>
                              <Disclosure.Panel className="  px-4 pt-4 pb-2 text-sm text-gray-500">
                              You can fund any of your wallets
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      </div>
                      <div className="flush border-b">
                        <Disclosure className="">
                          {({ open }) => (
                            <>
                              <Disclosure.Button className=" flex w-full justify-between px-4 py-5 text-left text-sm font-medium  focus:outline-text-pink-700 focus-visible:ring focus-visible:ring-pink-700 focus-visible:ring-opacity-75">
                                <span>
                                What is the minimum and maximum amount I can send or receive on Vella daily?  

                                </span>
                                <BiChevronDown  
                                  className={`${
                                    open ? "rotate-180 transform" : ""
                                  } h-5 w-5 text-pink-700`}
                                />
                              </Disclosure.Button>
                              <Disclosure.Panel className="  px-4 pt-4 pb-2 text-sm text-gray-500">
                              Once you have completed your verification, There are no limits.

                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      </div>
                      <div className="flush border-b">
                        <Disclosure className="">
                          {({ open }) => (
                            <>
                              <Disclosure.Button className=" flex w-full justify-between px-4 py-5 text-left text-sm font-medium  focus:outline-text-pink-700 focus-visible:ring focus-visible:ring-pink-700 focus-visible:ring-opacity-75">
                                <span>
                                How much does Vella charge for international transfers?
                                </span>
                                <BiChevronDown  
                                  className={`${
                                    open ? "rotate-180 transform" : ""
                                  } h-5 w-5 text-pink-700`}
                                />
                              </Disclosure.Button>
                              <Disclosure.Panel className="  px-4 pt-4 pb-2 text-sm text-gray-500">
                              $45.
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>

            <div className="border-b">
              <Disclosure className="">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="active:text-pink-700 focus:text-pink-700 flex w-full justify-between px-4 py-5 text-left text-sm font-medium  focus:outline-text-pink-700 focus-visible:ring focus-visible:ring-pink-700 focus-visible:ring-opacity-75">
                      <span className="text-lg font-bold">Funding wallet</span>
                      <BiChevronDown  
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-pink-700`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-sm ">
                    <div className="flush border-b">
                        <Disclosure className="">
                          {({ open }) => (
                            <>
                              <Disclosure.Button className=" flex w-full justify-between px-4 py-5 text-left text-sm font-medium  focus:outline-text-pink-700 focus-visible:ring focus-visible:ring-pink-700 focus-visible:ring-opacity-75">
                                <span>
                                Can I fund my wallet with Bank Transfer? 
                                </span>
                                <BiChevronDown  
                                  className={`${
                                    open ? "rotate-180 transform" : ""
                                  } h-5 w-5 text-pink-700`}
                                />
                              </Disclosure.Button>
                              <Disclosure.Panel className="  px-4 pt-4 pb-2 text-sm text-gray-500">
                              Yes, you can fund your wallet via Bank Transfer. All you have to do is make a transfer to the bank details provided in the “Pay with Bank Transfer” option and upload proof of payment to fund your wallet successfully. 

                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      </div>
                      
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>

            <div className="border-b">
              <Disclosure className="">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="active:text-pink-700 focus:text-pink-700 flex w-full justify-between px-4 py-5 text-left text-sm font-medium  focus:outline-text-pink-700 focus-visible:ring focus-visible:ring-pink-700 focus-visible:ring-opacity-75">
                      <span className="text-lg font-bold">Verification</span>
                      <BiChevronDown  
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-pink-700`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-sm">
                    <div className="flush border-b">
                        <Disclosure className="">
                          {({ open }) => (
                            <>
                              <Disclosure.Button className=" flex w-full justify-between px-4 py-5 text-left text-sm font-medium  focus:outline-text-pink-700 focus-visible:ring focus-visible:ring-pink-700 focus-visible:ring-opacity-75">
                                <span>
                                Can I change my VellaTag? 
                                </span>
                                <BiChevronDown  
                                  className={`${
                                    open ? "rotate-180 transform" : ""
                                  } h-5 w-5 text-pink-700`}
                                />
                              </Disclosure.Button>
                              <Disclosure.Panel className="  px-4 pt-4 pb-2 text-sm text-gray-500">
                              No
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      </div>
                      <div className="flush border-b">
                        <Disclosure className="">
                          {({ open }) => (
                            <>
                              <Disclosure.Button className=" flex w-full justify-between px-4 py-5 text-left text-sm font-medium  focus:outline-text-pink-700 focus-visible:ring focus-visible:ring-pink-700 focus-visible:ring-opacity-75">
                                <span>
                                How do I increase my daily limit?
                                </span>
                                <BiChevronDown  
                                  className={`${
                                    open ? "rotate-180 transform" : ""
                                  } h-5 w-5 text-pink-700`}
                                />
                              </Disclosure.Button>
                              <Disclosure.Panel className="  px-4 pt-4 pb-2 text-sm text-gray-500">
                              By completing your KYC, limits will increase automatically


                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      </div>
                      
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
            <div className="border-b">
              <Disclosure className="">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="active:text-pink-700 focus:text-pink-700 flex w-full justify-between px-4 py-5 text-left text-sm font-medium  focus:outline-text-pink-700 focus-visible:ring focus-visible:ring-pink-700 focus-visible:ring-opacity-75">
                      <span className="text-lg font-bold">Virtual cards</span>
                      <BiChevronDown  
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-pink-700`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-sm">
                    <div className="flush border-b">
                        <Disclosure className="">
                          {({ open }) => (
                            <>
                              <Disclosure.Button className=" flex w-full justify-between px-4 py-5 text-left text-sm font-medium  focus:outline-text-pink-700 focus-visible:ring focus-visible:ring-pink-700 focus-visible:ring-opacity-75">
                                <span>
                                How many cards can I create?
                                </span>
                                <BiChevronDown  
                                  className={`${
                                    open ? "rotate-180 transform" : ""
                                  } h-5 w-5 text-pink-700`}
                                />
                              </Disclosure.Button>
                              <Disclosure.Panel className="  px-4 pt-4 pb-2 text-sm text-gray-500">
                              Unlimited
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      </div>
                      <div className="flush border-b">
                        <Disclosure className="">
                          {({ open }) => (
                            <>
                              <Disclosure.Button className=" flex w-full justify-between px-4 py-5 text-left text-sm font-medium  focus:outline-text-pink-700 focus-visible:ring focus-visible:ring-pink-700 focus-visible:ring-opacity-75">
                                <span>
                                What is the limit of USDT transfer ?
                                </span>
                                <BiChevronDown  
                                  className={`${
                                    open ? "rotate-180 transform" : ""
                                  } h-5 w-5 text-pink-700`}
                                />
                              </Disclosure.Button>
                              <Disclosure.Panel className="  px-4 pt-4 pb-2 text-sm text-gray-500">
                              No limit
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      </div>
                    
                      <div className="flush border-b">
                        <Disclosure className="">
                          {({ open }) => (
                            <>
                              <Disclosure.Button className=" flex w-full justify-between px-4 py-5 text-left text-sm font-medium  focus:outline-text-pink-700 focus-visible:ring focus-visible:ring-pink-700 focus-visible:ring-opacity-75">
                                <span>
                                How do I fund my card?

                                </span>
                                <BiChevronDown  
                                  className={`${
                                    open ? "rotate-180 transform" : ""
                                  } h-5 w-5 text-pink-700`}
                                />
                              </Disclosure.Button>
                              <Disclosure.Panel className="  px-4 pt-4 pb-2 text-sm text-gray-500">
                              Fund card directly from any of your existing vella wallet
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      </div>
                      <div className="flush border-b">
                        <Disclosure className="">
                          {({ open }) => (
                            <>
                              <Disclosure.Button className=" flex w-full justify-between px-4 py-5 text-left text-sm font-medium  focus:outline-text-pink-700 focus-visible:ring focus-visible:ring-pink-700 focus-visible:ring-opacity-75">
                                <span>
                                Can I use the dollar card to pay for Facebook ads?
                                </span>
                                <BiChevronDown  
                                  className={`${
                                    open ? "rotate-180 transform" : ""
                                  } h-5 w-5 text-pink-700`}
                                />
                              </Disclosure.Button>
                              <Disclosure.Panel className="  px-4 pt-4 pb-2 text-sm text-gray-500">
                             Yes
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
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
                    The vision of NAIS is to effectively train NAIC personnel to be able to provide actionable intelligence in support of the NA to accomplish assigned missions within a joint environment in the Defence of Nigeria as well as train other Corps and sister Intelligence Services in art of intelligence enterprise. </Disclosure.Panel>
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
                    The mission of NAIS is to provide training for NAIC personnel, other Corps and sister Intelligence Services to enable them perform intelligence duties wherever they are deployed on the field.
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
            
          </div>  

        </div>
        </div>
    </div>
  )
}

export default AboutVision
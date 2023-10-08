import React from 'react'
import house3 from "../../assets/IMG_0924_110021.JPG";
import white from "../../assets/WhatsApp Image 2023-10-07 at 10.22.12.jpeg";
import white1 from "../../assets/WhatsApp Image 2023-10-07 at 10.22.09 (1).jpeg";
const Latest = () => {
  return (
    <div>
            <div className="w-full bg-[#283f68] pt-[100px] pb-[70px] px-[15px] ">
<div className='flex items-center justify-between pb-5'>
<h4 className="text-white text-[33px] md:text-[42px] font-[600]">Latest News</h4>
            <h6 className="text-white text-[16px]">Read all news</h6>
             
</div>

<div className='grid md:grid-cols-3 gap-[30px]'>
<div>
<img className="w-full mb-5" src={house3} alt="/" />
<a href='' className='text-white text-[16px]  font-[400] hover:underline' >NAIS Signs Partnership Agreement with Rana Energy, Targets 18500 Megawatts of Clean Energy for 5,000 Homes, 1000 Jobs</a>
</div>

<div>
<img className="w-full mb-5" src={white} alt="/" />
<a href='' className='text-white text-[16px]  font-[400] hover:underline' >NAIS Graduates 113 Participants</a>
</div>                   

<div>
<img className="w-full mb-5" src={white1} alt="/" />
<a href='' className='text-white text-[16px]  font-[400] hover:underline' >NAIS Signs Partnership Agreement with Rana Energy, Targets 18500 Megawatts of Clean Energy for 5,000 Homes, 1000 Jobs</a>
</div>
</div>
 
              </div>

    </div>
  )
}

export default Latest
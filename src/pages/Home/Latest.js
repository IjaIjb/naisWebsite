import React from 'react'
import house from "../../assets/IMG-20230826-WA0040_104720.jpg";

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
<img className="w-full mb-5" src={house} alt="/" />
<a href='' className='text-white text-[16px]  font-[400] hover:underline' >NDC Signs Partnership Agreement with Rana Energy, Targets 18500 Megawatts of Clean Energy for 5,000 Homes, 1000 Jobs</a>
</div>

<div>
<img className="w-full mb-5" src={house} alt="/" />
<a href='' className='text-white text-[16px]  font-[400] hover:underline' >NDC Graduates 113 Participants</a>
</div>

<div>
<img className="w-full mb-5" src={house} alt="/" />
<a href='' className='text-white text-[16px]  font-[400] hover:underline' >NDC Signs Partnership Agreement with Rana Energy, Targets 18500 Megawatts of Clean Energy for 5,000 Homes, 1000 Jobs</a>
</div>
</div>
 
              </div>

    </div>
  )
}

export default Latest
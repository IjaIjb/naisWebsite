import React from 'react'
import logo from "../../assets/WhatsApp Image 2023-10-07 at 13.05.29.jpeg";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();

  return (
    <div>
        <div className='bg-[#283f68] pt-[70px]   px-[30px] '>
        <div className='md:flex justify-between gap-[170px]'> 
        <img className="w-20 h-20 " src={logo} alt="/" />
        <div className='grid md:grid-cols-4'>
<div className='text-white'>
<h3 className='text-[16px] font-[600] mb-5 '>About NAIS</h3>
<div className='pb-3 text-[#ffffffb3] '>
<Link to='/about' className='text-[14px]  font-[400]' >About</Link>
</div>
<div className='pb-3 text-[#ffffffb3] '>
<Link to='/commandant' className='text-[14px] font-[400]' >Our Commandant</Link>
</div>
{/* <div className='pb-3 text-[#ffffffb3] '>
<a href='' className='text-[14px] font-[400]' >Sitemap</a>
</div> */}
</div>

<div className='text-white'>
<h3 className='text-[16px] font-[600] mb-5 '>Academic</h3>
{/* <div className='pb-3 text-[#ffffffb3] '>
<a href='' className='text-[14px] font-[400]' >NDC Info Sys</a>
</div> */}
<div className='pb-3 text-[#ffffffb3] '>
<a href='' className='text-[14px] font-[400]' >Staffs</a>
</div>
<div className='pb-3 text-[#ffffffb3] '>
<a  target="_blank" href="mailto:hq.nais@army.mil.ng" className='text-[14px] font-[400]' >Webmail</a>
</div>
<div className='pb-3 text-[#ffffffb3] '>
<a href='' className='text-[14px] font-[400]' >Resource Centre</a>
</div>
</div>

<div className='text-white'>
<h3 className='text-[16px] font-[600] mb-5 '>Other Links</h3>
<div className='pb-3 text-[#ffffffb3] '>
<a href='' className='text-[14px] font-[400]' >Press & Media</a>
</div>
<div className='pb-3 text-[#ffffffb3] '>
<a href='' className='text-[14px] font-[400]' >Upcoming Events</a>
</div>
<div className='pb-3 text-[#ffffffb3] '>
<a href='' className='text-[14px] font-[400]' >Library</a>
</div>

</div>

<div className='text-white'>
<h3 className='text-[16px] font-[600] mb-5 '>Contact</h3>
{/* <div className='pb-3 text-[#ffffffb3] '>
<a href='' className='text-[14px] font-[400]' >info@ndc.gov.ng</a>
</div> */}
<div className='pb-3 text-[#ffffffb3] '>
<a href='' className='text-[14px] font-[400]' >  Nigerian Army Intelligence School, Tego Barracks, Apapa, Lagos. PMB 1059</a>
</div>
<div className='pb-3 text-[#ffffffb3] '>
<a href='' className='text-[14px] font-[400]' >  09121749848, 09042751349</a>
</div>
{/* <div className='flex gap-3 text-[#ffffffb3]'>
<a href='' className='text-[14px] font-[400]' ><BsTwitter className='w-5 h-5' /></a>
<a href='' className='text-[14px] font-[400]' > <FaFacebookSquare className='w-5 h-5' /></a>
<a href='' className='text-[14px] font-[400]' ><TfiYoutube className='w-5 h-5' /></a>
</div> */}

</div>
        </div>

        </div>

<div className='mt-[60px] text-[13px] border-t border-t-[#363c46] text-[#ffffff66] py-8'>
&copy; {date.getFullYear()}  Nigerian Army Intelligence School-Tego Barracks, Apapa,
                      Lagos.
</div>
        </div>
    </div>
  )
}

export default Footer
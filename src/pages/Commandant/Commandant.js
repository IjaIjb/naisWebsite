import React from 'react'
import Footer from '../Home/Footer'
import Head from '../../components/Head/Head'
import CommDetails from './CommDetails'

const Commandant = () => {
  return (
    <div>
          <div className="mx-auto w-full">
          <Head />
        <div className="h-full w-full md:bg-gray-200">
          <div className="flex w-full h-full justify-center">
            <div className=" w-full md:max-w-[1000px] ">
              <div className="flex ">
                <div className="w-full">
            
                  <div className=''>
<CommDetails />
                  </div>

                
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
                  <div className="">
                    <Footer />
                  </div>
                  </div>
        
      </div>
  )
}

export default Commandant
import React from 'react'
import Footer from '../Home/Footer'
import Head from '../../components/Head/Head'
import CommDetails from './CommDetails'

const Commandant = () => {
  return (
    <div>
          <div className="mx-auto w-full">
        <div className="h-full w-full md:bg-gray-200">
          <div className="flex w-full h-full justify-center">
            <div className=" w-full md:max-w-[1500px] ">
              <div className="flex ">
                <div className="w-full">
                  <Head />
                  <div className='md:px-10'>
<CommDetails />
                  </div>

                  <div className="md:px-10">
                    <Footer />
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
        
      </div>
  )
}

export default Commandant
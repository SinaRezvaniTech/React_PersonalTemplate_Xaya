import React from 'react'
//react reveal
import Fade from 'react-reveal/Fade'

//components
import Form from './Form/Form'
import Information from './Information/Information'

const Contact = () => {
  return (
    <section
      id='contact'
      className='bg-bg  md:max-h-screen pb-10  relative overflow-x-hidden '
    >
      <div className='container m-auto pb-5 overflow-hidden'>
        <div className='grid grid-cols-12'>
          <div className='order-2  md:order-1 pt-10 md:pt-0  col-span-12 md:col-span-6'>
            <Information />
          </div>
          <Fade bottom duration={2000}>
            <div className='md:order-2 col-span-12 md:col-span-6 shadow-lg rounded-md p-3 sm:p-5 '>
              <Form />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default Contact

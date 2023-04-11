import React from 'react'

//react reveal
import Fade from 'react-reveal/Fade'

//images
import person2 from '../../../assets/images/person2.png'

//content config file
import content from '../../../config/content.json'

const About = () => {
  return (
    <section id='about' className='bg-bg  md:max-h-screen min-h-max  relative '>
      <div className='container mx-auto'>
        <div className='grid grid-cols-12 '>
          {/*image*/}

          <div className='order-2 md:order-1 col-span-12 md:col-span-5 	'>
            <img src={person2} alt='me' className='' />
          </div>

          {/*about*/}
          <div className=' order-1 md:order-2	 px-5  sm:px-1 col-span-12 md:col-span-7  gap-10 flex flex-col justify-center mt-10 md:mt-3'>
            <Fade bottom cascade>
              <div id='headings' className=' text-2xl gap-6 flex flex-col'>
                <p className='text-primary text-3xl'>{content['about-name']}</p>

                <p>Age : {content['about-age']} </p>
                <p>Address : {content['about-address']}</p>
                <p>phone number: {content['about-phoneNumber']}</p>
              </div>
            </Fade>
            {/*description*/}
            <Fade bottom cascade duration={2000}>
              <div>
                <p className='text-lg font-normal leading-10 '>
                  {content['about-description']}
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

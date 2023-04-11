import React from 'react'
import Slider from 'react-slick'
//react reveal
import Fade from 'react-reveal/Fade'

//css react slick
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

//fake data json
import data from './ExperienceData'

const ExperienceSection = () => {
  //slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Fade bottom>
      <div>
        <Slider {...settings}>
          {data.map((i) => (
            //container
            <div className='px-5 md:px-20 lg:px-52 xl:px-64 pb-5'>
              {/*box*/}
              <div className='border-2 border-primary rounded-lg flex flex-col p-5 '>
                <div className='flex justify-between sm:flex-row flex-col sm:gap-0 gap-2'>
                  <h2 className='text-2xl font-bold'>{i.companyName}</h2>
                  <p className='opacity-80'>{i.date}</p>
                </div>
                <h3 className='text-xl pt-5'>{i.jobTitle}</h3>
                <p className='pt-8 sm:pt-14 text-lg leading-10'>
                  {i.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Fade>
  )
}

export default ExperienceSection

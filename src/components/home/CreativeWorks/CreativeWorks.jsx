import React from 'react'
//slider
import Slider from 'react-slick'

//css react slick
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

//components
import Title from './Title'

//fake images for slider
import images from './CreativeWorksImages'

const CreativeWorks = () => {
  //slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  }
  return (
    <section
      id='portfolio'
      className='bg-bg pt-20 sm:pt-0  md:max-h-screen min-h-[750px] overflow-hidden  relative '
    >
      <div className='container m-auto '>
        {/*Title*/}
        <Title title='Creative works' />

        {/*Slider*/}
        <div className='mt-20 '>
          <Slider {...settings}>
            {images.map((i, index) => (
              <div
                className='px-3 sm:px-10 h-[32rem] lg:h-[35rem] relative pb-6 outline-none'
                key={index}
              >
                <div className='border-4 w-full h-full rounded-md border-primary overflow-hidden'>
                  <img
                    className='w-full h-full object-cover hover:scale-125 ease-in-out duration-300 cursor-pointer '
                    src={i.src}
                    alt={`slide${index}`}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default CreativeWorks

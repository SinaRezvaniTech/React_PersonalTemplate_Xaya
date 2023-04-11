import React, { useCallback } from 'react'

//particles js
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import particlesData from './particlesData'

//images
import person1 from '../../../assets/images/person1.png'

//components
import CTAButton from './CTAButton'
import Title from './Title'

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container)
  }, [])

  return (
    <>
      <section
        id='home'
        className='h-screen md:h-[800px]  md:max-h-screen w-full  '
      >
        {/*background particles*/}
        <Particles
          id='tsparticles'
          init={particlesInit}
          loaded={particlesLoaded}
          options={particlesData}
        />
        {/*contents*/}
        <div className='container relative m-auto h-full flex flex-col-reverse'>
          <div className='grid grid-cols-12 '>
            {/*CTA*/}

            <div className='sm:col-span-7 flex flex-col-reverse justify-between col-span-12 w-full '>
              <CTAButton /> <Title />
            </div>

            {/*image*/}

            <img
              src={person1}
              alt='me'
              className='col-span-12 sm:col-span-5 w-full  mx-auto'
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero

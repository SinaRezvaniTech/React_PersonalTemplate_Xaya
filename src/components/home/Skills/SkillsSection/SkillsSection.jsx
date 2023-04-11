import React from 'react'
//react reveal
import Fade from 'react-reveal/Fade'

//css
import './SkillsSection.scss'

// data json
import data from './SkillsData'

//content config file
import content from '../../../../config/content.json'

const SkillsSection = () => {
  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-12 sm:col-span-5 '>
        {/*skill box*/}
        <Fade left>
          <div
            className={`${
              data.length === 5 ? 'overflow-y-hidden' : 'overflow-y-auto'
            } w-full  max-h-[23rem]  overflow-x-hidden scrollStyle`}
          >
            {/*if You can have more than 5 items. Add your skills to the SkillsData.js file*/}
            {data.map((i, index) => (
              <div className='md:w-4/5 mx-auto my-9 pr-5' key={index}>
                {/*title*/}
                <span className='title text-lg'>{i.name}</span>
                {/*skill bar*/}
                <div className='w-full h-2  bg-black bg-opacity-10 rounded-full'>
                  {/*skill per*/}
                  <span
                    style={{ width: `${i.progress}%` }}
                    className={`skill-per relative h-full rounded-full bg-primary block `}
                  >
                    {/*tooltip*/}
                    <span className='absolute text-[0.90rem] -right-5 -top-12 text-white bg-secondary rounded-lg px-[0.60rem] py-[0.45rem]  before:absolute before:left-1/2 before:-bottom-1 before:h-4 before:w-4 before:-z-10 z-10 before:content-[ ] before:bg-secondary before:-translate-x-1/2 before:rotate-45'>
                      {i.progress}%
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </div>

      {/* text right */}
      <Fade right>
        <div className='col-span-12 sm:col-span-7'>
          <div className='w-full h-full flex justify-center items-center pt-10 sm:pt-0 sm:pl-14  text-lg md:px-20 leading-10'>
            <p className='text-left '>{content['skills-description']}</p>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default SkillsSection

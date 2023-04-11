import React, { useState } from 'react'

//components
import Button from './Button'
import ExperienceSection from './ExperienceSection/ExperienceSection'
import SkillsSection from './SkillsSection/SkillsSection'

const Skills = () => {
  //states  (Skills, Experience)
  const [item, setItem] = useState('Skills')
  return (
    <section
      id='skills'
      className='bg-bg  md:max-h-screen min-h-[750px]  relative pt-20'
    >
      <div className='container m-auto'>
        {/*modern button*/}
        <Button setItem={setItem} item={item} />
        <div className='mt-20'>
          {item === 'Skills' ? <SkillsSection /> : <ExperienceSection />}
        </div>
      </div>
    </section>
  )
}

export default Skills

import React from 'react'
import { Link } from 'react-router-dom'
//react reveal
import Fade from 'react-reveal/Fade'

//icons
import { IoLocationSharp } from 'react-icons/io5'
import { BsTelegram, BsTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
} from 'react-icons/ai'

//content config file
import content from '../../../../config/content.json'

const Information = () => {
  return (
    <Fade bottom cascade duration={2000}>
      {' '}
      <div className='flex flex-col gap-10'>
        {/*Address*/}
        <div className='flex flex-col'>
          <div className='flex items-center '>
            <IoLocationSharp className='opacity-80 text-4xl ' />
            <h4 className='text-2xl font-bold'>Address :</h4>
          </div>
          <p className='pl-3 text-lg'> {content['contact-address']}</p>
        </div>

        {/*phone*/}
        <div className='flex flex-col gap-2'>
          <div className='flex items-center'>
            <BsTelephoneFill className='opacity-80 text-4xl mr-3 p-[3px]' />
            <h4 className='text-2xl font-bold'>Phone Number :</h4>
          </div>
          {content['contact-phoneNumber'].map((item, index) => (
            <p className='pl-3 text-lg' key={index}>
              {item}
            </p>
          ))}
        </div>

        {/*Email Address */}
        <div className='flex flex-col gap-2'>
          <div className='flex items-center'>
            <MdEmail className='opacity-80 text-4xl mr-2' />
            <h4 className='text-2xl font-bold'>Email Address :</h4>
          </div>
          {content['contact-emailAddress'].map((item, index) => (
            <p className='pl-3 text-lg' key={index}>
              {item}
            </p>
          ))}
        </div>

        {/*social media icons */}
        <div className='flex gap-3 md:gap-7 mt-5  text-[#4f4f4f]'>
          <Link to={content['contact-instagramAddress']} target={'_blank'}>
            <AiFillInstagram className='text-[2.2rem] cursor-pointer  hover:text-secondary ease-out duration-300 md:scale-125' />
          </Link>
          <Link to={content['contact-telegramAddress']} target={'_blank'}>
            <BsTelegram className='text-[2.2rem] p-[0.15rem] cursor-pointer hover:text-secondary ease-out duration-300 md:scale-125' />
          </Link>
          <Link to={content['contact-twitterAddress']} target={'_blank'}>
            <AiFillTwitterCircle className='text-[2.2rem]  cursor-pointer hover:text-secondary ease-out duration-300 md:scale-125' />
          </Link>
          <Link to={content['contact-githubAddress']} target={'_blank'}>
            <AiFillGithub className='text-[2.2rem]  cursor-pointer hover:text-secondary ease-out duration-300 md:scale-125' />
          </Link>
        </div>
      </div>
    </Fade>
  )
}

export default Information

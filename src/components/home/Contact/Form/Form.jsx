import React from 'react'

//hooks
import useContactForm from '../../../../hooks/useContactForm'

const Form = () => {
  //use states
  const {
    submitHandler,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    phone,
    setPhone,
    message,
    setMessage,
  } = useContactForm()

  return (
      <form
        onSubmit={(e) => {
          e.preventDefault()
          submitHandler()
        }}
      >
        <div className='grid grid-cols-12 gap-4 sm:gap-7'>
          {/*first name*/}
          <div className='relative z-0 w-full  group col-span-6'>
            <input
              type='text'
              name='firstName'
              className='block py-2.5 px-3 w-full border-2 border-primary rounded-md bg-[#fff0] focus:outline-none focus:ring-0 peer'
              placeholder=' '
              required
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
            <label
              htmlFor='firstName'
              className={`text-black font-medium ml-1 bg-bg absolute duration-300 transform -translate-y-6 top-3  origin-[0] peer-focus:text-black text-xl peer-placeholder-shown:text-xl peer-focus:text-lg   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6 peer-focus:z-[999] px-2 rounded-lg peer-placeholder-shown:-z-10 z-30 `}
            >
              first name
            </label>
          </div>
          {/*last name*/}
          <div className='relative z-0 w-full  group col-span-6'>
            <input
              type='text'
              name='lastName'
              className='block autofill:focus:bg-primary py-2.5 px-3 w-full border-2 border-primary rounded-md bg-[#fff0] focus:outline-none focus:ring-0 peer'
              placeholder=' '
              required
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
            <label
              htmlFor='lastName'
              className={`text-black font-medium ml-1 bg-bg absolute duration-300 transform -translate-y-6 top-3  origin-[0] peer-focus:text-black text-xl peer-placeholder-shown:text-xl peer-focus:text-lg   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6 peer-focus:z-[999] px-2 rounded-lg peer-placeholder-shown:-z-10 z-30 `}
            >
              last name
            </label>
          </div>
          {/*message*/}
          <div className='relative z-0 w-full  group col-span-12'>
            <textarea
              rows='9'
              type='text'
              name='message'
              className='block py-2.5 px-3 w-full border-2 border-primary rounded-md bg-[#fff0] focus:outline-none focus:ring-0 peer'
              placeholder=' '
              required
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <label
              htmlFor='message'
              className={`text-black font-medium ml-1 bg-bg absolute duration-300 transform -translate-y-6 top-3  origin-[0] peer-focus:text-black text-xl peer-placeholder-shown:text-xl peer-focus:text-lg   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6 peer-focus:z-[999] px-2 rounded-lg peer-placeholder-shown:-z-10 z-30 `}
            >
              your message . . .
            </label>
          </div>
          {/*email*/}
          <div className='relative z-0 w-full  group col-span-12'>
            <input
              type='text'
              name='email'
              className='block py-2.5 px-3 w-full border-2 border-primary rounded-md bg-[#fff0] focus:outline-none focus:ring-0 peer'
              placeholder=' '
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <label
              htmlFor='email'
              className={`text-black font-medium ml-1 bg-bg absolute duration-300 transform -translate-y-6 top-3  origin-[0] peer-focus:text-black text-xl peer-placeholder-shown:text-xl peer-focus:text-lg   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6 peer-focus:z-[999] px-2 rounded-lg peer-placeholder-shown:-z-10 z-30 `}
            >
              email address
            </label>
          </div>
          {/*phone*/}
          <div className='relative z-0 w-full  group col-span-9'>
            <input
              type='text'
              name='phone'
              className='block py-2.5 px-3 w-full border-2 border-primary rounded-md bg-[#fff0] focus:outline-none focus:ring-0 peer'
              placeholder=' '
              required
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
            <label
              htmlFor='phone'
              className={`text-black font-medium ml-1 bg-bg absolute duration-300 transform -translate-y-6 top-3  origin-[0] peer-focus:text-black text-xl peer-placeholder-shown:text-xl peer-focus:text-lg   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6 peer-focus:z-[999] px-2 rounded-lg peer-placeholder-shown:-z-10 z-30 `}
            >
              phone number
            </label>
          </div>
          {/*send*/}
          <div className='relative z-0 w-full  group col-span-3'>
            <button className='bg-secondary text-xl h-full w-full text-white rounded-md hover:bg-primary ease-in-out duration-200 hover:shadow-md'>
              send
            </button>
          </div>
        </div>
      </form>
  )
}

export default Form

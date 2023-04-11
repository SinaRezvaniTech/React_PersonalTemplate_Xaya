//library
import React, { useContext } from 'react'
//context
import ContactFormContext from '../context/contactForm/ContactFormContext'

const useContactForm = () => {
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
  } = useContext(ContactFormContext)
  return {
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
  }
}

export default useContactForm

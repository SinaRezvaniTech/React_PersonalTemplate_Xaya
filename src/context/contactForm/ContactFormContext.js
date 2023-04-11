//library
import React, { createContext, useState } from 'react'
import Swal from 'sweetalert2'

//content config file
import content from '../../config/content.json'

//create context
const ContactFormContext = createContext()

export function ContactFormContextProvider({ children }) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const submitHandler = () => {
    // DO somthing... (send data to your api)
    // succes ( when message sent )
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your message has been sent',
      showConfirmButton: false,
      timer: 1500,
    })

    /*
    //when faild 
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'There is a problem. Your message was not sent',
      showConfirmButton: false,
      timer: 1500,
    })
*/

    /*
    if you dont have server (BackEnd) -> Uncomment the code below
    The code below will send the message directly from the user's email to your first email defined in the settings  
    */

    /* 
    const subject = 'email from my portfolio website '
    const body = `
    <p>First Name: ${firstName}</p><br/>
    <p>Last Name: ${lastName}</p><br/>
    <p>Email Addres: ${email}</p><br/>
    <p>Phone Number: ${phone}</p><br/><hr/>
    <p>message: ${message}</p><br/>
    `

    window.location.href = `mailto:${content['contact-emailAddress'][0]}?subject=${subject}&body=${body}`
    */
  }

  return (
    <ContactFormContext.Provider
      value={{
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
      }}
    >
      {children}
    </ContactFormContext.Provider>
  )
}

export default ContactFormContext

'use client'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import Subscibe from '@/components/Subscibe'
import { FaPhoneAlt } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import Head from 'next/head'

const Contact = () => {
  const formRef = useRef()
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_hpo9z1w',
        'template_1e0ja7l',
        formRef.current,
        'GQhEF6oBPCG2WErx3'
      )
      .then(
        (result) => {
          console.log(result.text)
          setDone(true)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <div className='lg:px-5 xl:px-40 text-[#155e75] flex items-center flex-col'>
      <div className='flex mt-16 flex-col xl:flex-row px-5 xl:px-0'>
        <div className=' flex flex-col flex-1 xl:mr-[30px] mb-[20px]'>
          <div>
            <h1 className='font-bold text-4xl'>Contact Me</h1>
            <p className='mt-3 mb-10 text-xl'>
              If you have any questions or would like to collaborate, please
              don't hesitate to contact me
            </p>
          </div>
          <div>
            <div className='flex items-center gap-x-2'>
              <FaPhoneAlt />
              <p className='text-xl'>+2348132163481</p>
            </div>
            <div className='flex items-center gap-x-2 mt-2'>
              <FiMail />
              <p className='text-xl'>peterolatunji1@gmail.com</p>
            </div>
          </div>
        </div>

        <div className=' flex flex-col flex-1'>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='w-full xl:w-[800px]'
          >
            <div className='flex flex-col'>
              <span className='text-black text-xl font-bold'>Name</span>
              <input
                type='text'
                placeholder='Enter your name'
                required
                name='user_name'
                className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mt-4 mb-8'
              />
            </div>
            <div className='flex flex-col'>
              <span className='text-black text-xl font-bold'>Email</span>
              <input
                type='email'
                placeholder='Enter a valid email address'
                required
                name='user_email'
                className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mt-4 mb-8'
              />
            </div>
            <div className='flex flex-col'>
              <span className='text-black text-xl font-bold'>Message</span>
              <textarea
                placeholder='Type your message here'
                required
                name='message'
                className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mt-4 mb-8 h-[100px]'
              />
            </div>
            <button className='w-full bg-[#155e75] text-white py-3 rounded text-bold'>
              Send Message
            </button>
            <p className='text-green-500 mt-2 font-bold'>
              {done && 'Thanks for contacting us'}
            </p>
          </form>
        </div>
      </div>
      <Subscibe />
    </div>
  )
}

export default Contact

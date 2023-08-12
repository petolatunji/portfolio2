import React from 'react'
import Skills from '../skills/page'
import Link from 'next/link'

export const metadata = {
  title: 'Portfolio | About',
  openGraph: {
    title: 'Portfolio | Home',
  },
}

const About = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40 text-[#155e75] flex items-center flex-col mt-[30px]  '>
      <div className='flex flex-col xl:flex-row'>
        <div className='flex-1'>
          <h1 className=' my-5 text-center xl:text-start text-3xl xl:text-4xl underline font-bold'>
            About Me
          </h1>
          <p className='text-xl text-justify'>
            I'm Peter Olatunji a full-stack developer from Nigeria with
            expertise in building modern and scalable web applications.
          </p>
          <p className='text-xl my-4 text-justify'>
            I have a deep understanding of front-end technologies like HTML,
            CSS, JavaScript, React, Next.js and Tailwind CSS as well as Back-end
            technologies such as Node.js, Express, and database like MongoDB.
          </p>
          <p className='text-xl  text-justify'>
            I enjoy working on challenging projects and collaborating with teams
            to create innovative solutions. My goal is to continuously expand my
            knowledge and stay up to date with the latest industry trends and
            best practices.
          </p>
          <p className='text-xl my-4 text-justify'>
            I am currently available for freelance or job opportunities. If you
            want to build scalable web applications feel free to
            <Link
              href='/contact'
              target='_blank'
              className='text-blue-600 underline ml-2'
            >
              contact me
            </Link>
            .
          </p>
        </div>
        <div className='flex-1 ml-0 xl:ml-20'>
          <h1 className=' my-5 text-center xl:text-start text-3xl xl:text-4xl underline font-bold'>
            Where I've worked
          </h1>
          <div>
            <h1 className='text-xl text-justify font-bold'>
              Emjay Web Solution
            </h1>
            <p className='text-xl my-4 text-justify'>
              Software Engineer June 2021 - till date
            </p>
            <ul className='list-disc px-4'>
              <li className='text-xl  text-justify'>
                Responsible for designing, testing, and implementing new and
                update software programs and also review other developer code.
              </li>
              <li className='text-xl my-4 text-justify'>
                Utilized the agile methodology for project management and team
                collaboration.
              </li>
              <li className='text-xl  text-justify'>
                Completed task to ensure compliance with relevant regulations.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <Skills />
      </div>
    </div>
  )
}

export default About

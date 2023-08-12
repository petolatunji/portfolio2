import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40 text-[#155e75] flex items-center flex-col mt-[30px] mb-[15px] border-t-[#155e75] border-t-2'>
      <div className='flex items-center gap-x-4'>
        <Link
          href='https://github.com/petolatunji'
          className='font-bold text-2xl'
          target='_blank'
        >
          <FaGithub />
        </Link>
        <Link
          href='https://www.linkedin.com/in/babatunde-olatunji-peter-1b5181119/'
          className='font-bold text-2xl'
          target='_blank'
        >
          <FaLinkedin />
        </Link>
        <Link
          href='https://twitter.com/petolatunji '
          className='font-bold text-2xl'
          target='_blank'
        >
          <FaTwitter />
        </Link>
      </div>
      <div className='mt-4'>
        <p>© ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  )
}

export default Footer

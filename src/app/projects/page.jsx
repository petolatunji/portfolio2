import Link from 'next/link'
import { data } from '@/data'
import Image from 'next/image'
import { FiExternalLink } from 'react-icons/fi'

export const metadata = {
  title: 'Portfolio | My Projects',
  openGraph: {
    title: 'Portfolio | Home',
  },
}

const Projects = () => {
  return (
    <div className=' lg:px-5 xl:px-40 text-[#155e75]  flex  flex-col mt-[10px] w-full '>
      <div className='flex flex-col my-[50px] px-4'>
        <h1 className=' text-3xl xl:text-4xl text-center'>My Projects</h1>
        <p className='text-base text-center mt-4 mb-6'>
          Here are some of my projects the rest of the project are available on
          github
        </p>
      </div>

      <div className='grid grid-cols-1 xl:grid-cols-2 gap-8 px-5 xl:px-0 '>
        {data.map((info) => (
          <div key={info.id} className='bg-[#155e75] text-white px-8 py-8'>
            {info.img && (
              <div className=''>
                <Image
                  src={info.img}
                  alt=''
                  width={600}
                  height={300}
                  className='object-cover h-[500px]'
                />
              </div>
            )}
            <div>
              <p className='mt-10 font-semibold'>{info.desc}</p>
              <p className='my-4'>{info.stack}</p>
              <button className=' bg-white text-[#155e75] px-2 py-2'>
                <Link
                  href={info.link}
                  target='_blank'
                  className='flex items-center'
                >
                  <FiExternalLink />
                  <span className='ml-2'>Link</span>
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects

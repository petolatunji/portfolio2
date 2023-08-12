import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='lg:px-5 xl:px-40 bg-[#155e75] text-white flex flex-col xl:flex-row items-center xl:justify-between h-[100vh] px-4 '>
      <div className='flex flex-col '>
        <h1 className='my-4 text-xl  mt-10 xl:mt-0 '>
          Hello Everyone, my name is
        </h1>
        <h1 className='animate-text bg-gradient-to-r from-white via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black'>
          Peter Olatunji
        </h1>

        <p className='my-4 text-xl w-full xl:w-[600px] animate-none xl:animate-fade-down '>
          I'm a Software Engineer with over 3 years of experience using
          different tools to build applications providing solutions to client's
          problems.
        </p>
        <div className='flex items-center mt-4'>
          <Link href='/cv.pdf' target='_blank' rel='noopener noreferrer'>
            <button className='border-2 font-bold rounded-md px-2 py-4 hover:bg-white hover:text-[#155e75]  animate-shake'>
              Download My Cv
            </button>
          </Link>
          <Link
            href='https://github.com/petolatunji'
            className='font-bold'
            target='_blank'
          >
            <button className='border-2 font-bold rounded-md px-2 py-4 hover:bg-white hover:text-[#155e75] ml-4 animate-shake'>
              Link to Github
            </button>
          </Link>
        </div>
      </div>
      <div className='flex my-10 ml-0 xl:ml-12 xl:my-0'>
        <Image
          src='/cc.jpg'
          alt=''
          width={800}
          height={800}
          className='cover rounded-md'
        />
      </div>
    </div>
  )
}

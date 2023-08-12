import Image from 'next/image'

const Skills = () => {
  return (
    <div className='lg:px-5 xl:px-40 text-[#155e75] flex items-center flex-col my-10 xl:20'>
      <div>
        <h1 className='my-10 text-center text-3xl xl:text-4xl underline font-bold'>
          My Skills
        </h1>
        <div className='grid grid-cols-2 xl:grid-cols-4 gap-8 px-5 xl:px-0'>
          <div className='shadow-xl col-span-1 row-span-3 p-4'>
            <Image src='/html.png' alt='' width={200} height={200} />
          </div>
          <div className='shadow-xl col-span-1 row-span-3 p-4'>
            <Image src='/css.png' alt='' width={200} height={200} />
          </div>
          <div className='shadow-xl col-span-1 row-span-3 p-4'>
            <Image src='/tailwind.png' alt='' width={200} height={200} />
          </div>
          <div className='shadow-xl col-span-1 row-span-3 p-4'>
            <Image src='/js.png' alt='' width={200} height={200} />
          </div>
          <div className='shadow-xl col-span-1 row-span-3 p-4'>
            <Image src='/rea.png' alt='' width={200} height={200} />
          </div>
          <div className='shadow-xl col-span-1 row-span-3 p-4'>
            <Image src='/next.png' alt='' width={200} height={200} />
          </div>
          <div className='shadow-xl col-span-1 row-span-3 p-4'>
            <Image src='/github.png' alt='' width={200} height={200} />
          </div>
          <div className='shadow-xl col-span-1 row-span-3 p-4'>
            <Image src='/node.png' alt='' width={200} height={200} />
          </div>
          <div className='shadow-xl col-span-1 row-span-3 p-4'>
            <Image src='/express.png' alt='' width={200} height={200} />
          </div>
          <div className='shadow-xl col-span-1 row-span-3 p-4'>
            <Image src='/mongo.png' alt='' width={200} height={200} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills

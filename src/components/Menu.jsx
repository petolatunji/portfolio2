'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const links = [
  { id: 1, title: 'Home', url: '/' },
  { id: 2, title: 'About', url: '/about' },
  { id: 3, title: 'My Project', url: '/projects' },
  { id: 4, title: 'Contact', url: '/contact' },
]

const Menu = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      {!open ? (
        <Image
          src='/ham.png'
          alt=''
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src='/close.png'
          alt=''
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}

      {open && (
        <div className='bg-[#155e75] text-white absolute left-0 top-12 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10'>
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Menu

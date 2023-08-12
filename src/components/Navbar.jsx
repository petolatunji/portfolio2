import Menu from './Menu'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='h-12 text-[#155e75] p-4 flex items-center justify-between border-b-2 border-b-[#155e75] uppercase md:h-24 lg:px-20 xl:px-40'>
      {/* LOGO */}
      <div className='text-xl md:font-bold  '>
        <Link href='/'>PETOLATUNJI</Link>
      </div>

      {/* MOBILE MENU */}
      <div className='md:hidden'>
        <Menu />
      </div>
      {/* RIGHT LINKS */}

      <div className='hidden md:flex gap-4 '>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/projects'>My Projects</Link>
        <Link href='/contact'>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar

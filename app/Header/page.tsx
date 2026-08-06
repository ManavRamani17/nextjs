import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='bg-cyan-600 p-3 text-white flex justify-center'>
        <Link className='text-xl m-3 transition-all hover:scale-110 duration-500' href="/">Home</Link>
        <Link className='text-xl m-3 transition-all hover:scale-110 duration-500' href="/About" scroll={true}>About</Link>    
        <Link className='text-xl m-3 transition-all hover:scale-110 duration-500' href="/Contact">Contact</Link>
        <Link className='text-xl m-3 transition-all hover:scale-110 duration-500' href="/College">College</Link>
        <Link className='text-xl m-3 transition-all hover:scale-110 duration-500' href="/Students">Students</Link>
        <Link className='text-xl m-3 transition-all hover:scale-110 duration-500' href="/Flight">Flight</Link>

    </div>
  )
}
export default Header

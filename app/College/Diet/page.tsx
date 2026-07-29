import Link from 'next/link'
import React from 'react'

function Diet() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Link className='m-3 transform active:scale-90 duration-500 text-xl text-white bg-cyan-600 w-7/8 text-center rounded-lg'href="/College/Dica">Dica</Link>
      <h1 className="text-3xl font-bold m-3 transform hover:scale-110 duration-500 text-white">Diet page</h1>
      <p className='text-white text-lg'>This is a simple paragraph for the Diet page.</p>
    </div>
  )
}

export default Diet

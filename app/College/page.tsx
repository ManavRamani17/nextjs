import Link from 'next/link'
import React from 'react'

function College() {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className='flex items-center justify-center  bg-cyan-600 rounded-lg m-3 w-7/8'>
          <Link className='m-3 transform hover:scale-110 duration-500 text-xl text-white' href="/College/Diet">Diet</Link>
          <Link className='m-3 transform hover:scale-110 duration-500 text-xl text-white' href="/College/Dica">Dica</Link>
        </div>
        <h1 className="text-3xl font-bold m-3 transform hover:scale-110 duration-500 text-white">College page</h1>
        <p className='text-white text-lg'>This is a simple paragraph for the College page.</p>
    </div>
  )
}

export default College

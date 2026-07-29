import Link from 'next/link'
import React from 'react'

async function StudentId({params}:{params:Promise<{id:String}>}){
  const {id} = await  params
  const dataraw = await fetch("https://687e28ccc07d1a878c318ccf.mockapi.io/Manav/"+id)
  const data = await dataraw.json()
  
  return (
    <div className='flex flex-col justify-center items-center m-3'>
        <div className='border text-white flex flex-col justify-center items-center bg-cyan-700 w-7/8 rounded-lg p-3 transform hover:scale-105 duration-500'>
            <h1 className='text-3xl text-white m-3'>StudentId: {data.id}</h1>
            <h1 className='text-white text-xl'>Student Name: {data.StuName}</h1>
            <h1 className='text-white text-xl'>Student Phone: {data.Stuphone}</h1>
            <h1 className='text-white text-xl'>Student City: {data.StuCity}</h1>
            <h1 className='text-white text-xl'>Student Country: {data.Stucountry}</h1>
        </div>
        
       <Link href={"/Students"} className='bg-cyan-600 text-white w-7/8 flex justify-center items-center border rounded-lg m-2 transform active:scale-95 duration-500'>
            <div >
                <h1 className=" text-white text-3xl">Back</h1>
            </div>
        </Link>
       
      
    </div>
  )
}

export default StudentId

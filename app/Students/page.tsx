import Link from 'next/link'
import React from 'react'

async function Students() {

    const dataraw = await fetch("https://687e28ccc07d1a878c318ccf.mockapi.io/Manav")
    const data = await dataraw.json()
  return (
    <div className='flex flex-col justify-center items-center m-3'>
        <h1 className='text-3xl text-white transform hover:scale-105 duration-500'>Student Page</h1>
        {data.map((stu:any)=>{
            return(
                    
                    <Link className='bg-cyan-600 text-white w-7/8 flex justify-center items-center border rounded-lg m-2 transform active:scale-95 duration-500' href={"/Students/"+stu.id}>
                        <div >
                            <h1 className=" text-white text-3xl">{stu.id}. {stu.StuName}</h1>
                        </div>
                    </Link>
            )
            
        })}
    </div>
  )
}

export default Students

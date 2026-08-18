import React from 'react'
import mysql from 'mysql2/promise'
import Link from 'next/link'

async function Userid({ params }: { params: Promise<{ id: number }>}) {
    const connection = await mysql.createConnection({
            host:"localhost",
            user:"root",
            password:"100617",
            database:"student"
        })
        const { id } = await params
        const [result] = await connection.query("select * from student where id ="+ id)
        const dataTemp = result as []
        const data = dataTemp[0] 
  return (
    <div className='flex flex-col justify-center items-center m-3'>
        <div className='border text-white flex flex-col justify-center items-center bg-cyan-700 w-7/8 rounded-lg p-3 transform hover:scale-105 duration-500'>
            <h1 className='text-3xl text-white m-3'>StudentId: {data.Id}</h1>
            <h1 className='text-white text-xl'>Student Name: {data.Name}</h1>
            <h1 className='text-white text-xl'>Student Phone: {data.Age}</h1>
            <h1 className='text-white text-xl'>Student City: {data.Sem}</h1>
            <h1 className='text-white text-xl'>Student Country: {data.Course}</h1>
        </div>
      
       <Link href={"/Users"} className='bg-cyan-600 text-white w-7/8 flex justify-center items-center border rounded-lg m-2 transform active:scale-95 duration-500'>
            <div >
                <h1 className=" text-white text-3xl">Back</h1>
            </div>
        </Link>
       
      
    </div>
  )
}

export default Userid


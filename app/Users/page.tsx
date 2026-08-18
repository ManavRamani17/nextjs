import React from 'react'
import mysql from 'mysql2/promise'
import Link from 'next/link'

async function Users() {
    const connection = await mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"100617",
        database:"student"
    })
    const [result] = await connection.query("select * from student")
    const data = result as []
  return (
    <div className='flex flex-col justify-center items-center m-3'>
        <h1 className='text-white text-3xl transform hover:scale-105 duration-500'>user page</h1>
        {
            data.map((stu:any)=>{
                return(
                    <Link key={stu.Id} className='bg-cyan-600 text-white w-7/8 flex justify-center items-center border rounded-lg m-2 transform active:scale-95 duration-500' href={"/Users/"+stu.Id}>
                        <div>
                            <h1 className='text-white text-2xl'>{stu.Id}. {stu.Name}</h1>
                        </div>
                    </Link>
                )
            })
        }
      
    </div>
  )
}

export default Users

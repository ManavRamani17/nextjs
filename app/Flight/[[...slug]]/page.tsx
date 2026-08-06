import React from 'react'

 async function FromPage({params}:{params:Promise<{slug:string}>}) {
    const {slug} = await params
    console.log(slug)
  return (
    <div className='flex justify-center items-center'>
        <h1 className='text-3xl text-white'></h1>
    </div>
  )
}
export default FromPage

import React from 'react'

async function Students({params}:{params:Promise<{id:String}>}) {
    const {id} = await params
    const dataraw = await fetch("https://687e28ccc07d1a878c318ccf.mockapi.io/Manav")
    const data = await dataraw.json()
  return (
    <div>
      <h1 className='text-3xl text-center m-5 text-white'>
        Number of Students: {data.length}
      </h1>
    </div>
  )
}

export default Students

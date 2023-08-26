import React from 'react'
function Advisor({name, college, position, email}) {
  return (
    <div className='flex flex-col justify-between space-y-3 bg-purple-400 rounded-3xl p-10'>

        <div className='text-center'>
            <div className='w-full flex justify-center'>
            <img src='https://assets.algoexpert.io/spas/main/prod/gdebb2c9563-prod/dist/images/1b9a05eb524cd1db08c6.jpg'
                className='rounded-full border-2 border-orange-500 text-center'
                height={'80px'}
                width={'80px'}
            />
            </div>
            <h1 className='text-xl font-medium'>
                {name}
            </h1>
            <div>
                {college}
            </div>
            <h2 className=' text-xl font-semibold'>
                {position}
            </h2>
        </div>
        <div className='w-full justify-center flex'>
            <a href={`mailto:${email}`}
                target='__blank'
                    className='bg-purple-800 cursor-pointer text-white font-bold p-3 rounded-sm'
                >
                    Message✉️
                </a>
        </div>
    </div>
  )
}

export default Advisor
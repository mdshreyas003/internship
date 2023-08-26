import React from 'react'

function Mentor({name, college, email}) {
  return (
    <div className='flex min-w-fit justify-center'>

        <div className='text-center'>
            <div className='w-full flex justify-center'>
            <img src='https://assets.algoexpert.io/spas/main/prod/gdebb2c9563-prod/dist/images/1b9a05eb524cd1db08c6.jpg'
                className='rounded-full border-2 border-blue-600 text-center'
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
            
        </div>
    </div>
  )
}

export default Mentor
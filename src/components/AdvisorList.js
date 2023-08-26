import React from 'react'
import Advisor from './Advisor'

function AdvisorList() {
    const advisors=[{
        name: "Dr.Omkar",
        college: "IIT Madras",
        position:"Principal Project Scientist",
        email: "person1@example.com"
      },
      {
        name: "Jane",
        college: "Stanford University",
        position:"Manager",
        email: "person2@example.com"
      },
      {
        name: "Michael",
        college: "Harvard University",
        position:"Mentor",
        email: "person3@example.com"
      },]
  return (

    <div className='w-full pb-10'>
        <h1 className='text-2xl md:text-3xl text-center py-4 my-2 font-bold'>
            Advisors
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5 items-cente border-2 border-dashed border-spacing-3 p-12 border-black'>
            {advisors.map((e)=>{
                return(
                    <Advisor name={e.name} college={e.college} position={e.position} email={e.email}/>
                )
            })}
        </div>

    </div>
  )
}

export default AdvisorList
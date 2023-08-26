import React from 'react'
import Mentor from './Mentor'

function MentorList() {
    const mentors=[{
        name: "John",
        college: "Massachusetts Institute of Technology (MIT)",
        email: "person1@example.com"
      },
      {
        name: "Jane",
        college: "Stanford University",
        email: "person2@example.com"
      },
      {
        name: "Michael",
        college: "Harvard University",
        email: "person3@example.com"
      },
      {
        name: "Emily",
        college: "California Institute of Technology (Caltech)",
        email: "person4@example.com"
      },
      {
        name: "David",
        college: "University of Oxford",
        email: "person5@example.com"
      },
      {
        name: "Sarah",
        college: "University of Cambridge",
        email: "person6@example.com"
      },
      {
        name: "Daniel",
        college: "ETH Zurich - Swiss Federal Institute of Technology",
        email: "person7@example.com"
      },
      {
        name: "Olivia",
        college: "University of Chicago",
        email: "person8@example.com"
      }]
  return (
    <div className='pb-10'>
        <h1 className='text-2xl md:text-3xl text-center py-4 my-2 font-bold'>
            Mentors
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 items-center'>
            {mentors.map((e)=>{
                return(
                   <Mentor name={e?.name} college={e?.college} email={e?.email}/>
                )
            })}
        </div>
    </div>
  )
}

export default MentorList
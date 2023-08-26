import React, { useCallback, useState } from 'react'
import University from './University'

function Universitylist() {
    const universities=[
        {
            name: "Massachusetts Institute of Technology (MIT)",
            link: "https://www.mit.edu/"
          },
          {
            name: "Stanford University",
            link: "https://www.stanford.edu/"
          },
          {
            name: "Harvard University",
            link: "https://www.harvard.edu/"
          },
          {
            name: "California Institute of Technology (Caltech)",
            link: "http://www.caltech.edu/"
          },
          {
            name: "University of Oxford",
            link: "https://www.ox.ac.uk/"
          },
          {
            name: "University of Cambridge",
            link: "https://www.cam.ac.uk/"
          },
          {
            name: "ETH Zurich - Swiss Federal Institute of Technology",
            link: "https://www.ethz.ch/"
          },
          {
            name: "University of Chicago",
            link: "https://www.uchicago.edu/"
          },
          {
            name: "Imperial College London",
            link: "https://www.imperial.ac.uk/"
          },
          {
            name: "Indian Institute of Technology Delhi (IIT Delhi)",
            link: "http://www.iitd.ac.in/"
          },
          {
            name: "Indian Institute of Technology Bombay (IIT Bombay)",
            link: "https://www.iitb.ac.in/"
          },
          {
            name: "Indian Institute of Technology Madras (IIT Madras)",
            link: "https://www.iitm.ac.in/"
          },
          {
            name: "Indian Institute of Technology Kanpur (IIT Kanpur)",
            link: "https://www.iitk.ac.in/"
          },
          {
            name: "Indian Institute of Technology Kharagpur (IIT Kharagpur)",
            link: "http://www.iitkgp.ac.in/"
          },
          {
            name: "University of California, Berkeley",
            link: "https://www.berkeley.edu/"
          },
    ]
    const [showMore,setShowMore] = useState(false);
    const showList = showMore ? universities : universities.slice(0,10) 
    const [txt,setTxt] = useState("Show More")
  return (
    <div className='pb-10'>
        <h1 className='text-2xl md:text-3xl text-center font-medium py-4 my-2'>
            Learn From Scientist, Research Scholors from <span className='font-bold'>top Institutes in the World</span>
        </h1>
        <div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 items-center'>
            {showList.map((e)=>{
                return(
                    <University name={e?.name} link={e?.link}/>
                )
            })}
            <div className='cursor-pointer rounded-full bg-purple-300 text-lg p-2 w-fit text-center align-text-top' onClick={()=>{
                if(showMore === true) setTxt("Show More")
                else setTxt("Show Less")
                setShowMore(!showMore)
            }}>{txt}</div>
        </div>
        </div>
    </div>
  )
}

export default Universitylist
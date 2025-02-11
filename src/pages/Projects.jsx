import React, { useState } from 'react'
import Cards from '../utils/Cards'
import CardDets from '../utils/CardDetails'
const Projects = ({theme}) => {

  const [CardsData, setCardsData] = useState(CardDets)

  return (
    <div id='projects' className='w-full relative pt-2 lg:p-2'>
        <h1 id='projectsBox' className='text-5xl text-center font-semibold pb-6 tracking-wider'>Projects</h1>
        <h1 className='text-2xl lg:text-4xl tracking-wider font-semibold uppercase ml-3 lg:ml-10'>Frontend Projects : )</h1>
        <div 
        className='w-[100%] h-fit p-4 flex items-center justify-start gap-x-7 flex-wrap gap-y-10 lg:gap-y-0'>
            
            {CardsData && CardsData.map((data, index) => (
              <Cards 
              key={index}
              theme={theme}
              img={data.picture}
              name={data.title}
              para={data.para}
              link={data.link}
              />
            ))}
            
        </div>
    </div>
  )
}
export default Projects
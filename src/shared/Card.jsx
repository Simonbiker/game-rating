import React from 'react'

function Card({children}) {
    return (
        <div className='container bg-lightBlue rounded-3xl m-7  mx-auto max-w-6xl md:p-10 '>
         <div>{ children}</div>   
      </div>
      
  )
}

export default Card
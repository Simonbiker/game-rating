import React from 'react'

// Shared
import Card from '../shared/Card'

function GameRatingItem({item}) {
    return (
      <Card>
        <h3 className='text-center text-2xl'>Game</h3>
        <div className='flex rounded-full bg-cyan text-white justify-center w-8 h-8 text-lg'>1</div>
        <div className='flex flex-row-reverse space-x-4 space-x-reverse '>
          <button >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue hover:text-darkBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
        <button className='color-blue'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue hover:text-darkBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </button>
        </div>
        
        <p className='relative pt-8 pb-8'>This is inside the card style component</p> 
      </Card>
    
  )
}

export default GameRatingItem
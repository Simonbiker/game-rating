import React from 'react'

import GameRatingItem from './GameRatingItem'

function GameRatingList({ gameRating }) {
  
  // if (!gameRating || gameRating.length === 0) {
  //   return <p>No game rating yet</p>
  // }
    return (
      <GameRatingItem />
  )
}

export default GameRatingList
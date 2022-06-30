import { motion, AnimatePresence } from "framer-motion"
import React, { useContext } from 'react'
import GameRatingContext from '../context/GameRatingContext'

import GameRatingItem from './GameRatingItem'

function GameRatingList() {
  const { gameRating } = useContext(GameRatingContext)
  
  if (!gameRating || gameRating.length === 0) {
    return <p>No game rating yet</p>
  }
  return (
    gameRating.map((item) => {
     return <motion.div
     key={item.id}
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     exit={{opacity:0}}
 > 
      <GameRatingItem key={item.id} item={item} /> 
       </motion.div> 
     })
    

  )
}

export default GameRatingList
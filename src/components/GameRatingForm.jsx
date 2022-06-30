import React from 'react'
import { useState, useContext, useEffect } from 'react'
import GameRatingContext from '../context/GameRatingContext'
import Card from '../shared/Card'
import RatingSelector from './RatingSelector'

function GameRatingForm() {

    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    // const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [titleMessage, setTitleMessage] = useState('')

    const { addGameRating, editGameRating, updateGameRating } = useContext(GameRatingContext)
    
    useEffect(() => {
        if (editGameRating.edit === true) {
            // setBtnDisabled(false)
            setTitle(editGameRating.item.title)
            setText(editGameRating.item.text)
            setRating(editGameRating.item.rating)
        }
    }, [editGameRating])

    const handleTextChange = (e) => {
        if (text === '') {
            // setBtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length <= 10) {
            setMessage('Text must be at least ten characters')
            // setBtnDisabled(true)
        } else {
            setMessage(null)
            // setBtnDisabled(false)
        }

        setText(e.target.value)
    }

    const titleChange = (e) => {
        if (text === '') {
            // setBtnDisabled(true)
            setTitleMessage(null)
        } else if (text !== '' && text.trim().length <= 5) {
            setTitleMessage('Text must be at least five characters')
            // setBtnDisabled(true)
        } else {
            setTitleMessage(null)
            // setBtnDisabled(false)
        }

        setTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
            const newGameRating = {
                title,
                text,
                rating
            }
            if (editGameRating.edit === true) {
                updateGameRating(editGameRating.item.id, newGameRating)
            } else {
               addGameRating(newGameRating) 
            }

            setText('')
        }
        
    }

  return (
      <Card>
          <form onSubmit={handleSubmit}>
              <h2>How would you rate the last game you played</h2>

              <RatingSelector select={ (rating) => setRating(rating)} />
              <div>
                  <div className='flex flex-col'>
                    <input className='p-3 space-y-2 mb-3 rounded-md' onChange={titleChange} type="text" placeholder='Title of the Game' value={title} />
                  <input className='p-3 space-y-2 mb-3 rounded-md' onChange={handleTextChange} type="text" placeholder='Write a review'
                  value={text}/>  
                  </div>
                  
                  <button className='px-4 py-4 rounded-lg text-sm text-white bg-blue' type='submit' >Submit</button>
              </div>
              {titleMessage && <div>{ titleMessage}</div>}
              {message && <div>{ message}</div>}
          </form>
    </Card>
  )
}

export default GameRatingForm
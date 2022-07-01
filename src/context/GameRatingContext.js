import { createContext, useState, useEffect } from "react";

const GameRatingContext = createContext()

export const GameRatingProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [gameRating, setGameRating] = useState([])

    const [gameRatingEdit, setGameRatingEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => { fetchGameRating() }, [])

    // Fetch feedback
    const fetchGameRating = async () => {
        const response = await fetch('/gameRating?_sort=id&_order=desc')
        const data = await response.json()
        setGameRating(data)
        setIsLoading(false)
    }

    const addGameRating = async (newGameRating) => {
        const response = await fetch('/gameRating', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(newGameRating)
        })

        const data = await response.json()
        setGameRating([data, ...gameRating])
    }

    const deleteGameRating = async (id) => {
        if (window.confirm('Are you sure you want to delete your game rating?')) {
            await fetch(`/gameRating/${id}`, { method: 'DELETE' })
            setGameRating(gameRating.filter((item) => item.id !== id))
        }
    }

    //This will set item to be updated.
    const editGameRating = (item) => {
        setGameRatingEdit({
            item,
            edit: true
        })
    }

    const updateGameRating = async (id, updItem) => {
        const response = await fetch(`/gameRating/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updItem)
        })

        const data = await response.json()
        setGameRating(
            gameRating.map((item) => (item.id === id ? { ...item, ...data } : item))
        )
    }

    return <GameRatingContext.Provider value={{
        gameRating,
        gameRatingEdit,
        isLoading,
        deleteGameRating,
        addGameRating,
        editGameRating,
        updateGameRating,
    }}>
        {children}
    </GameRatingContext.Provider>
}

export default GameRatingContext
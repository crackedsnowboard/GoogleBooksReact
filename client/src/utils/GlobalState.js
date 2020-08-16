import React, {createContext, useReducer, useContext} from "react"
import {UPDATE_BOOKS, SET_CURRENT_BOOK, NEW_QUERY} from "./action"

const BookContext = createContext()
const {Provider} = BookContext

const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_BOOKS:
            return {
                ...state,
                books: action.books
            }
            break
        case NEW_QUERY:
            const newState = {...state, searchResults: action.results} 
            return newState
        case SET_CURRENT_BOOK:
            return {
                ...state,
                currentBook: action.book
            }
            break
        default:
            
            return state
    }
}

const BookProvider = ({value=[], ...props}) => {

    const [state, dispatch] = useReducer(reducer, {
        currentBook: null,
        books: [],
        searchResults: null
    })

    return <Provider value={[state, dispatch]} {...props}/>
}

const useBookContext = () => {

    return useContext(BookContext)
}

export { BookProvider, useBookContext }
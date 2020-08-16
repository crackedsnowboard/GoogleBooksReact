import React, {useContext} from 'react'
import {UseBookContext} from "../../utils/GlobalState"
import Jumbotron from "../../components/Jumbotron"
import SearchBar from "../../components/SearchBar"
import BookList from "../../components/BookList"

function Search() {
    
    return (
        <div>
            <Jumbotron/>
            <SearchBar/>
            <BookList/>
        </div>
    )
}

export default Search
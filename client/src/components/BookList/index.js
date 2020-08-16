import React from 'react'
import './style.css'
import { useBookContext } from "../../utils/GlobalState"
import Col from "../Col"
import Row from "../Row"

function BookListItem({ book }) {

    return (
        <li>
            <Row>
                <Col columns="col-sm-12 col-md-10">
                    <p className="text-center mt-3">{book.title}</p>
                    <p className="text-center">{book.authors}</p>
                    <p className="text-center">{book.description}</p>
                </Col>
                <Col columns="col-sm-12 col-md-2">
                        <img className="list-img" src={book.imageLinks.smallThumbnail} />

                </Col>
                
            </Row>
        </li>
    )
}


function BookList() {

    const [state, dispatch] = useBookContext()

    return (
        <ul className="no-bullet">
            {state.searchResults ? state.searchResults.map(book => {
                return <BookListItem book={book} />
            }) :
                <p>Your searched books will appear here!</p>}
        </ul>
    )

}

export default BookList
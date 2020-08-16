import axios from "axios"

export default {
    getBooks() {
        return axios.get("/api/books")
    },

    getBook(id) {
        return axios.get("/api/books/" + id)
    },

    saveBook(bookObj) {
        return axios.post("/api/books", bookObj)
    },

    deleteBook(id) {
        return axios.delete("/api/books/" + id)
    },

    searchBooks(title) {
        return axios.get("/google/newbooks/" + title)
    }
}

//searchBooks(title).then(books => {
//  books.map(book => <ListItem book={book}/>)
//})
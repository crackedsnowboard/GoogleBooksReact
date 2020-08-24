# Book search application using Google
I am builiding an application that uses Google search for books. This is a full stack application using React on the front end and a combination of technologies for the back end web stack to include Axios, Express, Node, and MongoDB. The application is hosted at Heroku. This exercise allowed me to create React components, work with helper/util functions, and utilize React lifecycle methods to query and display books based on user searches.

## User Story
As a reader, I want to be able to view and manage the books I've read or plan to read in the future

## Installation
I used MongoDB to store the data. Node.js, Axios, and Express to build the API queries.

Check out Node [Node](https://nodejs.org/en/)
and MySQL [MySQL](https://www.mongodb.com//)

## Key Code Snippets
A few key SQL queries that helped display data in the format desired: 

Axios API query to get book data from google search 
```
const router = require("express").Router();
const axios = require("axios")


// Matches with routes "/google/newbooks/:title"
router.get("/newbooks/:title", (req, res) => {
    var titleQuery = req.params.title
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + titleQuery).then(response => {
        res.json(response.data.items)
    })
})
```

### Link to deployed Employee Tracker
[Employee-Tracker](https://booksearchreact.herokuapp.com/)


#### Author Links
[LinkedIn](linkedin.com/in/joel-mathen/) <br>
[GitHub](https://github.com/crackedsnowboard)


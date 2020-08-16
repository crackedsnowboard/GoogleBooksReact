const router = require("express").Router();
const BooksController = require("../../controllers/BookController");

// Matches with "/api/books"
router.route("/")
  .get(BooksController.findAll)
  .post(BooksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(BooksController.findOne)
  .put(BooksController.update)
  .delete(BooksController.remove);

module.exports = router;
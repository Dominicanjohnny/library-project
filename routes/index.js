const express = require('express');
const router  = express.Router();
const Book = require('../models/book.js');

// router.get('/books', (req, res, next) => {
//   book.find()
//     .then(books => {
//       res.render("books", { books });
//     })
//     .catch(error => {
//       console.log(error);
//     });
  
    router.get('/book/:id', (req, res, next) => {
      let bookId = req.params.id;
      Book.findOne({'_id': bookId})
        .then(book => {
          res.render("book-detail", { book })
        })
        .catch(error => {
          console.log(error)
        })
    });
// });

module.exports = router;

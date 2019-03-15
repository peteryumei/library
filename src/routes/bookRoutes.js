const express = require('express');
const sql = require('mssql');
const debug = require('debug')('app:bookRoutes');

const bookRouter = express.Router();

function router(nav) {
  const books = [
    {
      title: 'War and Peace',
      genre: 'History Fiction',
      author: 'lev Nikolayevich Tolstoy',
      read: false
    },
    {
      title: 'Les Miserables',
      genre: 'History Fiction',
      author: 'Victor Hugo',
      read: false
    },
    {
      title: 'The Time Machine',
      genre: 'Science Fiction',
      author: 'H. G. Welss',
      read: false
    },
    {
      title: 'A Journey into the Center of the Earch',
      genre: 'Science Fiction',
      author: 'Jules Berne',
      read: false
    },
    {
      title: 'The Dark Work',
      genre: 'Fantasy',
      author: 'Henry Kutter',
      read: false
    },
    {
      title: 'The Wind in the Willows',
      genre: 'Fantasy',
      author: 'Kenneth Grahame',
      read: false
    },
    {
      title: 'Life On The Mississippi',
      genre: 'History',
      author: 'Mark Twain',
      read: false
    },
    {
      title: 'Childhood',
      genre: 'Biography',
      author: 'Lev Nikolayevich Tolstoy',
      read: false
    }];

  bookRouter.route('/')
    .get((req, res) => {
      const request = new sql.Request();

      request.query('select * from books')
        .then((result) => {
          debug(result);
          res.render('books',
            {
              nav,
              title: 'Libary',
              books: result.recordset
            });
        });
    });

  bookRouter.route('/:id')
    .get((req, res) => {
      const { id } = req.params;
      // debug(id);
      // console.log(id);
      // console.log(req.params);
      res.render('book',
        {
          nav,
          title: 'Libary',
          book: books[id]
        });
    });
  return bookRouter;
}


module.exports = router;

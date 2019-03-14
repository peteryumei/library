const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const bookRouter = express.Router();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/popper.js/dist')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

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
    res.render('books',
      {
        nav: [{ link: '/books', title: 'Books' },
          { link: '/authors', title: 'Authors' }],
        title: 'Libary',
        books
      });
  });

bookRouter.route('/single')
  .get((req, res) => {
    res.send('hello single book');
  });

app.use('/books', bookRouter);

app.get('/', (req, res) => {
  res.render(
    'index',
    {
      nav: [{ link: '/books', title: 'Books' },
        { link: '/authors', title: 'Authors' }],
      title: 'Libary'
    }
  );
});

app.listen(port, () => {
  debug(`listening on port + ${chalk.green(port)}`);
});

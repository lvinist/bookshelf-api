/* eslint-disable linebreak-style */
const {
  addBookHandler, getAllBooksHandler, getBookbyIdHandler, updateBookbyId, deleteBookbyIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookbyIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: updateBookbyId,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookbyIdHandler,
  },
];

module.exports = { routes };

import BookShow from './BookShow';
import { useContext } from 'react';
import BooksContext from '../context/books';
import { Book } from '../models/models';

function BookList() {
  const { books } = useContext(BooksContext);

  const showBooksList = books.map((book: Book) => {
    return <BookShow key={book.id} book={book} />;
  });

  return <div className="book-list">{showBooksList}</div>;
}

export default BookList;

import BookShow from './BookShow';
import { useContext } from 'react';
import BooksContext from '../context/books';

function BookList({ books, onEditBook, onDeleteBook }: any) {
  const { count, incrementCount } = useContext(BooksContext);

  const showBooksList = books.map((book: any) => {
    return (
      <BookShow
        key={book.id}
        book={book}
        onEditBook={onEditBook}
        onDeleteBook={onDeleteBook}
      />
    );
  });

  return (
    <div className="book-list">
      {count}
      <button onClick={incrementCount}>Click</button>
      {showBooksList}
    </div>
  );
}

export default BookList;

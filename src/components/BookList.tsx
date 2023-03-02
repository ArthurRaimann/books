import BookShow from './BookShow';
import { Book } from '../models/models';
import useBooksContext from '../hooks/use-books-context';

function BookList() {
  const { books } = useBooksContext();

  const showBooksList = books.map((book: Book) => {
    return <BookShow key={book.id} book={book} />;
  });

  return <div className="book-list">{showBooksList}</div>;
}

export default BookList;

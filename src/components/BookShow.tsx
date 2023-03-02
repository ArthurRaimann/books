import { useContext, useState } from 'react';
import BooksContext from '../context/books';
import { BookShowTypes } from '../models/models';
import BookEdit from './BookEdit';

function BookShow({ book }: BookShowTypes) {
  const [edit, setEdit] = useState<boolean>(false);

  const { deleteBookById } = useContext(BooksContext);

  const handleEditClick = (book: any) => {
    setEdit(!edit);
  };

  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };

  return (
    <div className="book-show">
      <img
        alt="books"
        src={`https://picsum.photos/seed/${book.id}${book.title}/300/200`}
      />
      {edit ? (
        <BookEdit handleEdit={handleEditClick} book={book} />
      ) : (
        <h3>{book.title}</h3>
      )}
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;

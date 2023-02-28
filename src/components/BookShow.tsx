import { useState } from 'react';
import BookEdit from './BookEdit';

function BookShow({ book, onEditBook, onDeleteBook }: any) {
  const [edit, setEdit] = useState<boolean>(false);

  const handleEditClick = (book: any) => {
    onEditBook({ id: book.id, title: book.title });
    setEdit(!edit);
  };

  const handleDeleteClick = () => {
    onDeleteBook(book.id);
  };

  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
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

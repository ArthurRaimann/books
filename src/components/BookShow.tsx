import { useState } from 'react';
import BookEdit from './BookEdit';

function BookShow({ book, onSubmitEdit, handleDelete }: any) {
  const [edit, setEdit] = useState(false);

  const handleEdit = (book: any) => {
    onSubmitEdit({id: book.id, title: book.title})
    setEdit(!edit);
  };

  const onDelete = () => {
    handleDelete(book.id);
  };

 
  return (
    <div className='book-show'>
      <img alt='books' src={`https://picsum.photos/seed/${book.id}/300/200`} />
      {edit ? (
        <BookEdit
          handleEdit={handleEdit}
          book={book}
        />
      ): (<h3>{book.title}</h3>)}
      <div className='actions'>
        <button className='edit' onClick={handleEdit}>Edit</button>
        <button className='delete' onClick={onDelete}>Delete</button>
      </div>
      
    </div>
  );
}

export default BookShow;

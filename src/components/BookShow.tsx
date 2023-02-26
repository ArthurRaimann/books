import { useState } from 'react';

function BookShow({ book, onSubmitEdit, handleDelete }: any) {
  const [edit, setEdit] = useState(false);
  const [editedTitle, setEditTitle] = useState('');

  const handleEdit = () => {
    setEdit(!edit);
  };

  const onDelete = () => {
    handleDelete(book.id);
  };

  const handleChange = (event: any) => {
    setEditTitle(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    onSubmitEdit({ id: book.id, title: editedTitle });
    handleEdit();
    setEditTitle('');
  };

  return (
    <div style={{ border: '1px solid black', width: '200px' }}>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
      <h3>Title: {book.title}</h3>
      {edit && (
        <div>
          <form onSubmit={handleSubmit}>
            <input value={editedTitle} onChange={handleChange} />
          </form>
        </div>
      )}
    </div>
  );
}

export default BookShow;

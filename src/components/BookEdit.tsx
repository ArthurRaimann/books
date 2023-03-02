import { useContext, useState } from 'react';
import BooksContext from '../context/books';

function BookEdit({ handleEdit, book }: any) {
  const [title, setTitle] = useState<string>(book.title);
  const { editBookById } = useContext(BooksContext);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    editBookById({ id: book.id, title });
    handleEdit();
  };

  const onChange = (event: any) => {
    setTitle(event.target.value);
  };

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input className="input" value={title} onChange={onChange} autoFocus />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;

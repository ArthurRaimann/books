import { useState } from "react";

function BookEdit({handleEdit, book }: any) {

  const [title, setTitle] = useState(book.title)

  const handleSubmit = (event: any) => {
    event.preventDefault();   
    handleEdit({ id: book.id, title});
  };

  const onChange = (event: any) => {
    setTitle(event.target.value);
  }
  

  return (
      <form className='book-edit' onSubmit={handleSubmit}>
        <label>Title</label>
        <input className='input' value={title} onChange={onChange} autoFocus/>
        <button className="button is-primary">Save</button>
      </form>
  );
}

export default BookEdit;

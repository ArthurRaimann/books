import { useState } from 'react';

function BookCreate({ onCreate }: any) {
  const [title, setTitle] = useState('');

  const handleChange = (event: any) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    onCreate(title);
    setTitle('');
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>New Book Title</label>
        <input
          className="input"
          value={title}
          type="text"
          onChange={handleChange}
          placeholder="title"
        />
        <button className="button">Create</button>
      </form>
    </div>
  );
}

export default BookCreate;

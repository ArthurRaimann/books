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
    <div>
      <form onSubmit={handleSubmit}>
        <label>New Book Title</label>
        <input
          value={title}
          type="text"
          onChange={handleChange}
          placeholder="title"
        />
        <button>Create</button>
      </form>
    </div>
  );
}

export default BookCreate;

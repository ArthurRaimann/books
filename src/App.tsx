import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title: string) => {
    const newBook = {
      id: Math.random(),
      title,
    };

    setBooks([...books, newBook]);
  };

  const onSubmitEdit = (editedBook: any) => {
    const newBookList = books.map((book) => {
      if (book.id === editedBook.id) {
        return { ...book, title: editedBook.title };
      }
      return book;
    });
    setBooks(newBookList);
  };

  const handleDelete = (bookId: any) => {
    const newBookList = books.filter((book) => book.id !== bookId);
    setBooks(newBookList);
  };

  return (
    <div>
      <BookList
        books={books}
        onSubmitEdit={onSubmitEdit}
        handleDelete={handleDelete}
      />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;

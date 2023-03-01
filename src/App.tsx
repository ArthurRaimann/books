import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

interface Book {
  id: number;
  title: string;
}

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  const fetchBooks = async () => {
    const response: AxiosResponse = await axios.get(
      'http://localhost:3001/books'
    );

    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const createBook = async (title: string) => {
    const response: AxiosResponse = await axios.post(
      'http://localhost:3001/books',
      {
        title,
      }
    );

    setBooks([...books, response.data]);
  };

  const editBookById = async (editedBook: Book) => {
    const response = await axios.put(
      `http://localhost:3001/books/${editedBook.id}`,
      {
        title: editedBook.title,
      }
    );

    const newBookList: Book[] = books.map((book) => {
      if (book.id === response.data.id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(newBookList);
  };

  const deleteBookById = async (bookId: number) => {
    await axios.delete(`http://localhost:3001/books/${bookId}`);

    const newBookList = books.filter((book) => book.id !== bookId);
    setBooks(newBookList);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList
        books={books}
        onEditBook={editBookById}
        onDeleteBook={deleteBookById}
      />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;

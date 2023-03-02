import axios, { AxiosResponse } from 'axios';
import { createContext, useState } from 'react';
import { Book, BooksContextType } from '../models/models';

const BooksContext = createContext<BooksContextType>({
  books: [{ id: 0, title: '' }],
  fetchBooks: () => {},
  createBook: () => {},
  editBookById: () => {},
  deleteBookById: () => {},
});

function Provider({ children }: any) {
  const [books, setBooks] = useState<Book[]>([]);

  const fetchBooks = async () => {
    const response: AxiosResponse = await axios.get(
      'http://localhost:3001/books'
    );

    setBooks(response.data);
  };

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

  const valueToShare = {
    books,
    fetchBooks,
    createBook,
    editBookById,
    deleteBookById,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;

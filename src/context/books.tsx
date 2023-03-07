import axios, { AxiosResponse } from 'axios';
import { createContext, useCallback, useState } from 'react';
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

  const fetchBooks = useCallback(async () => {
    const response: AxiosResponse = await axios.get(
      'https://my-json-server.typicode.com/ArthurRaimann/booksDB/books'
    );

    setBooks(response.data);
  }, []);

  const createBook = async (title: string) => {
    const response: AxiosResponse = await axios.post(
      'https://my-json-server.typicode.com/ArthurRaimann/booksDB/books',
      {
        title,
      }
    );

    setBooks([...books, response.data]);
  };

  const editBookById = async (editedBook: Book) => {
    const response = await axios.put(
      `https://my-json-server.typicode.com/ArthurRaimann/booksDB/books/${editedBook.id}`,
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
    await axios.delete(`https://my-json-server.typicode.com/ArthurRaimann/booksDB/books/${bookId}`);

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

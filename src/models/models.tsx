export interface BooksContextType {
  books: Book[];
  fetchBooks: Function;
  createBook: Function;
  editBookById: Function;
  deleteBookById: Function;
}

export interface Book {
  id: number;
  title: string;
}

export interface BookShowTypes {
  book: Book;
}

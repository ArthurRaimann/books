import BookShow from './BookShow';

function BookList({ books, onEditBook, onDeleteBook }: any) {
  const showBooksList = books.map((book: any) => {
    return (
      <BookShow
        key={book.id}
        book={book}
        onEditBook={onEditBook}
        onDeleteBook={onDeleteBook}
      />
    );
  });

  return <div className="book-list">{showBooksList}</div>;
}

export default BookList;

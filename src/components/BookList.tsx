import BookShow from './BookShow';

function BookList({ books, onSubmitEdit, handleDelete }: any) {
  const showBooksList = books.map((book: any) => {
    return (
      <BookShow
        key={book.id}
        book={book}
        onSubmitEdit={onSubmitEdit}
        handleDelete={handleDelete}
      />
    );
  });

  return <div className='book-list'>{showBooksList}</div>;
}

export default BookList;

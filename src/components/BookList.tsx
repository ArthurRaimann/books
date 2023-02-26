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
  console.log('showBooksList', showBooksList);

  return <div>New List {showBooksList}</div>;
}

export default BookList;

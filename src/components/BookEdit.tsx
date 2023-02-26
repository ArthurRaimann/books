function BookEdit({ handleSubmit, editedTitle, handleChange }: any) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={editedTitle} onChange={handleChange} />
      </form>
    </div>
  );
}

export default BookEdit;

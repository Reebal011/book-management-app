import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import BookForm from "../BookForm";
import BooksContext from "../../context/BooksContext.js";

const EditBook = ({ history }) => {
  const { books, setBooks } = useContext(BooksContext);

  const { id } = useParams();
  const bookToEdit = books.find((book) => book.id === id);

  const handleOnSubmit = (book) => {
    const filteredBooks = books.filter((book) => book.id !== id);
    setBooks([book, ...filteredBooks]);
    history.push("/");
  };

  return (
    <div>
      <BookForm book={bookToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditBook;

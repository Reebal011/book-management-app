import React, { useContext } from "react";
import BookForm from "../BookForm";
import BooksContext from "../../context/BooksContext.js";

const AddBook = ({ history }) => {
  const { books, setBooks } = useContext(BooksContext);

  const handleOnSubmit = (book) => {
    setBooks([...books, book]);
    history.push("/");
  };

  return (
    <>
      <BookForm handleOnSubmit={handleOnSubmit} />
    </>
  );
};

export default AddBook;

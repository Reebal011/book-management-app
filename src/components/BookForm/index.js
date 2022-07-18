import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import InputFeild from "../common/InputField";

const BookForm = (props) => {
  const [book, setBook] = useState({
    bookname: props.book ? props.book.bookname : "",
    author: props.book ? props.book.author : "",
    quantity: props.book ? props.book.quantity : "",
    price: props.book ? props.book.price : "",
    date: props.book ? props.book.date : "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const { bookname, author, price, quantity } = book;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [bookname, author, price, quantity];
    let errorMsg = "";

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== "" && value !== "0";
    });

    if (allFieldsFilled) {
      const book = {
        id: uuidv4(),
        bookname,
        author,
        price,
        quantity,
        date: new Date(),
      };
      props.handleOnSubmit(book);
    } else {
      errorMsg = "Please fill out all the fields.";
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log("value", value);
    switch (name) {
      case "quantity":
        if (value === "" || parseInt(value) === +value) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      case "price":
        if (value === "" || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      default:
        setBook((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <InputFeild
          controlId={"name"}
          book_cat={"Book name"}
          type={"text"}
          name={"bookname"}
          value={bookname}
          placeholder={"Enter name of book"}
          defaultValue={""}
          onChange={(e) => handleInputChange(e)}
        />
        <InputFeild
          controlId={"author"}
          book_cat={"Book Author"}
          type={"text"}
          name={"author"}
          value={author}
          defaultValue={""}
          placeholder={"Enter name of author"}
          onChange={handleInputChange}
        />
        <InputFeild
          controlId={"quantity"}
          book_cat={"Quantity"}
          type={"number"}
          name={"quantity"}
          value={quantity}
          defaultValue={0}
          placeholder={"Enter available quantity"}
          onChange={handleInputChange}
        />
        <InputFeild
          controlId={"price"}
          book_cat={"Book price"}
          type={"text"}
          name={"price"}
          value={price}
          defaultValue={0}
          placeholder={"Enter price of book"}
          onChange={handleInputChange}
        />
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default BookForm;

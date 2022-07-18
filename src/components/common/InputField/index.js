import React from "react";
import { Form } from "react-bootstrap";

const InputFeild = ({
  controlId,
  book_cat,
  type,
  name,
  value,
  placeholder,
}) => {
  return (
    <Form.Group controlId={controlId}>
      <Form.Label>{book_cat}</Form.Label>
      <Form.Control
        className="input-control"
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
      />
    </Form.Group>
  );
};

export default InputFeild;

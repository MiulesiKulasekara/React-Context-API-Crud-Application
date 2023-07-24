import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Edit = () => {
  return (
    <div>
      <h1>Edit a User</h1>
      <br></br>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Button type="submit">Edit User</Button>
      <Link to={"/"} className="btn btn-danger ms-2">
        Cancel
      </Link>
    </div>
  );
};

export default Edit;

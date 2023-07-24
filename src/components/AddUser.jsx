import { useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

const AddUser = () => {

  const { addUser } = useContext(GlobalContext);

  return (
    <div>
      <h1>Add a User</h1>
      <br></br>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" onChange={(e) => addUser()}/>
      </Form.Group>
      <Button type="submit">Submit</Button>
      <Link to={"/"} className="btn btn-danger ms-2">
        Cancel
      </Link>
    </div>
  );
};

export default AddUser;

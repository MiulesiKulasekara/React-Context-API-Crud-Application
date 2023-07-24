import React from "react";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const UserList = () => {
  return (
    <div>
      <ListGroup>
        <ListGroupItem className="d-flex">
          Item 1
          <div
            style={{ marginLeft: "auto", marginRight: "0" }}
            className="me-1"
          >
            <Link to={"/edit/:id"} className="btn btn-warning me-2">
              Edit
            </Link>

            <Button variant="danger">Cancel</Button>
          </div>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
};

export default UserList;

import { useContext } from "react";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

const UserList = () => {
  const { users,deleteUser } = useContext(GlobalContext);
  // console.log(users);
  return (
    <div>
      <ListGroup>
        {users.map((users, index) => {
          return (
            <ListGroupItem className="d-flex" key={index}>
              {users.name}
              <div
                style={{ marginLeft: "auto", marginRight: "0" }}
                className="me-1"
              >
                <Link to={`/edit/${users.id}`} className="btn btn-warning me-2">
                  Edit
                </Link>

                <Button variant="danger" onClick={()=>deleteUser(users.id)}>Delete</Button>
              </div>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default UserList;

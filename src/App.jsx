import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import AddUser from "./components/AddUser";
import Edit from "./components/Edit";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalState } from "./context/GlobalState";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add",
    element: <AddUser />,
  },
  {
    path: "/edit/:id",
    element: <Edit />,
  },
]);

function App() {
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <GlobalState>
        <RouterProvider router={router} />
      </GlobalState>
    </div>
  );
}

export default App;

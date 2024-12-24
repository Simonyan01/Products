import { createBrowserRouter } from "react-router-dom"
import { UserDetails } from "@pages/user-details"
import { UserList } from "@pages/user-list"
import { EditUser } from "@pages/edit-user"
import { AddUser } from "@pages/add-user"
import Layout from "../layout"

export const paths = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "", element: <UserList /> },
      { path: "add", element: <AddUser /> },
      { path: "user/edit/:key", element: <EditUser /> },
      { path: "user/details/:id", element: <UserDetails /> }
    ]
  }
])
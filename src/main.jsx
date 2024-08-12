import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import StaticItem from './component/StaticItem/StaticItem'
import Home from './component/Home/Home'
import Header from './component/Header/Header'
import About from './component/About/About'
import Contact from './component/Contact/Contact'
import Users from './component/Users/Users'
import ShowDetails from './component/ShowDetails/ShowDetails'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './component/ErrorPage/ErrorPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <StaticItem></StaticItem>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/header",
        element:<Header></Header>
      },
      {
        path:"/home",
        element:<Home></Home>
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/users",
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
      {
        path:"/users/:userId",
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<ShowDetails></ShowDetails>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)

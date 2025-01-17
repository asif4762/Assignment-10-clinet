import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Pages/Root/Root.jsx';
import Home from './Pages/Home/Home.jsx';
import AllArtAndCraftItems from './Pages/AllArtAndCraftItems/AllArtAndCraftItems.jsx';
import AddCraftItem from './Pages/AddCraftItem/AddCraftItem.jsx';
import MyArtAndCraftList from './Pages/MyArtAndCraftList/MyArtAndCraftList.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import UpdateProfile from './Pages/UpdateProfile/UpdateProfile.jsx';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx';
import SingleItem from './Pages/SingleItem/SingleItem.jsx';
import SingleItemUpdate from './Pages/Home/SingelItemUpdate/SingleItemUpdate.jsx';
import Error from './Pages/Error/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children : [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/All-Art',
        element: <AllArtAndCraftItems></AllArtAndCraftItems>
      },
      {
        path: '/Add-Art',
        element: <PrivateRoute>
          <AddCraftItem></AddCraftItem>
        </PrivateRoute>
      },
      {
        path: '/My-Art',
        element: <PrivateRoute>
          <MyArtAndCraftList></MyArtAndCraftList>
        </PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/Register',
        element: <Register></Register>
      },
      {
        path: '/update-profile',
        element: <PrivateRoute>
          <UpdateProfile></UpdateProfile>
        </PrivateRoute>
      },
      {
        path: '/single-item/:id',
        element: <PrivateRoute>
          <SingleItem></SingleItem>
        </PrivateRoute>
        
      },
      {
        path: '/single-item-update/:id',
        element: <PrivateRoute>

          <SingleItemUpdate></SingleItemUpdate>
        </PrivateRoute>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

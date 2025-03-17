import React from 'react'
import { useState, useEffect } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductDetails from './Pages/ProductDetails';
import MainRoutes from './Routes/MainRoutes';
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductPage';
import Cart from './Pages/Cart';
import Categories from './Pages/Categories';
import Login from './Pages/auth/Login';
import Signup from './Pages/auth/Signup';
import Contact from './Pages/Contact';
import User from './Pages/User';
import ProductCheckout from './Pages/ProductCheckout';
import Spinner from './Component/Spinner';
import LogoSpinner from './Component/Logospinner';

const routes = createBrowserRouter ([
   {
    path: "",
    element: <MainRoutes/>,
    children: [
      {
        path: "",
        element: 
          <HomePage />,
      },
      {
        path: "/productdetails",
        element: <ProductDetails />,
        
      },
      {
        path: "/productpage",
        element: <ProductPage />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
         path: "/categories",
         element: <Categories />,
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },

      {
         path: "/productcheckout",
         element: <ProductCheckout />,
      }
    ]
   },
   {
        path: "/login",
        element: <Login />,
   },
   {
        path: "/signup",
        element: <Signup />,
   }
])

const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LogoSpinner />;
  }
  return (

  //  <Spinner>
     <RouterProvider router={routes} />
  //  </Spinner>
    
    
  );
}


export default App

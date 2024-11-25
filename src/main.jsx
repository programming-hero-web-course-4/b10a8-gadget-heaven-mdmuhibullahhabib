import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainLayout from './Layouts/MainLayout.jsx';
import ErrorPages from './Pages/ErrorPages.jsx';
import Home from './Components/Home.jsx';
import AllProduct from './Pages/AllProduct.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import Statistics from './Pages/Statistics.jsx';
import ProductDetails from './Pages/productDetails.jsx';
import Products from './Pages/Products.jsx';
import Review from './Pages/Review.jsx';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
      {
        path: '/',
        element:<Home></Home>,
        loader: () => fetch('../categories.json'),
        children: [
          {
            path: "/category/:category",
            element: <Products></Products>,
            loader: () => fetch('../products.json'),
          }

        ],

      },
      {
        path: 'products/:product_id',
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('../products.json')
      },
      
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        loader: () => fetch('../products.json')
      },
      {
        path: "/review",
        element: <Review></Review>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      



    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <HelmetProvider>
   <RouterProvider router={router} />
   </HelmetProvider>
  </StrictMode>,
)

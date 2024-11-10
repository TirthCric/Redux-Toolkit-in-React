import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './components/Root.jsx';
import App from './components/App.jsx';
import PaymentPage from './components/PaymentPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children:[
      {
        path:"",
        element: <App />,
      },
      {
        path:"payment",
        element: <PaymentPage />,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

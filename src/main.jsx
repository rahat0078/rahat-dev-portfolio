import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layout/MainLayout.jsx';
import Details from './components/Details.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout>Hello world!</MainLayout>,
    children: [
      {
        path: '/',
        element: <App/>
      },
      {
        path: '/details/:id',
        element: <Details/>,
        loader: ()=> fetch('/projects.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)

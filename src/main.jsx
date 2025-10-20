import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app.css'
import App from './App.jsx'
import '@fontsource/inter';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from './Pages/HomePage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/portfolio",
        element: <h1>portfolio</h1>
      },
      {
        path: "/experiments",
        element: <h1>experiments</h1>
      },
      {
        path: "/archives",
        element: <h1>archives</h1>
      },
      {
        path: "/refer-a-friend",
        element: <h1>refer-a-friend</h1>
      },
      {
        path: "/grif-a-subscription",
        element: <h1>grif-a-subscription</h1>
      },
      {
        path: "/account",
        element: <h1>account</h1>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

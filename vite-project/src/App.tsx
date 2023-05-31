import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Dashboard from './components/pages/Dashboard/Dashboard.tsx';
import Customers from './components/pages/Customers/Customers.tsx';
/*
 vraag: Waarom werkt children:[] niet? 
*/
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/customers",
      element: <Customers />,
    }
  ]);

  return (
      <RouterProvider router={router} />
    )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './components/Home/Home';
import MainLayout from './LayOut/MainLayout';
import Home2 from './components/Home2/Home2';
import About from './components/About/About';
import Event from './components/Event/Event';
import Event_details from './components/Event_details/Event_details';
import Portfolio from './components/Portfolio/Portfolio';
import Portfolio_v2 from './components/Portfolio_v2/Portfolio_v2';
import Portfolio_details from './components/Portfolio_details/Portfolio_details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },{
        path:"/Home2",
        element:<Home2/>
      },{
        path:"/About",
        element:<About/>
      },
      {
        path:"/Event",
        element:<Event/>
      },{
        path:"/Event_details",
        element:<Event_details/>
      },
      {
        path:"/portfolio",
        element:<Portfolio/>
      },{
        path:"/portfolio2",
        element:<Portfolio_v2/>
      },
      {
        path:"/portfolio_details",
        element:<Portfolio_details/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
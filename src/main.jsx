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
import Gallery from './components/Pages/Gallery/Gallery';
import Services from './components/Pages/Services/Services';
import Services_Details from './components/Pages/Services_Details/Services_Details';
import Team from './components/Pages/Team/Team';
import Team_Details from './components/Pages/Team_Details/Team_Details';
import Faq from './components/Pages/FAQ/Faq';
import Login_Resister from './components/Pages/Login_&_Resister/Login_Resister';
import Error from './components/Pages/Error/Error';
import News from './components/News/News';
import News_List from './components/News_Details/News_List';
import News_L from './components/News_List/News_L';
import Contact from './components/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement:<Error/>,
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
      },
      {
        path:"/gallery",
        element:<Gallery/>
      },
      {
        path:"/Services",
        element:<Services/>
      },
      {
        path:"/services_details",
        element:<Services_Details/>
      },
      {
        path:"/Team",
        element:<Team/>
      },
      {
        path:"/team_details",
        element:<Team_Details/>
      },
      {
        path:"/Faq",
        element:<Faq/>
      },
      {
        path:"/login",
        element:<Login_Resister/>
      },
      {
        path:"/error",
        element:<Error/>
      },
      {
        path:"/news",
        element:<News/>
      },
      {
        path:"/news_details",
        element:<News_List/>
      },
      {
        path:"/news_list",
        element:<News_L/>

      },
      {
        path:"/contact",
        element:<Contact/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
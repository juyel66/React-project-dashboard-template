import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './Root/Roots.jsx';
// import ErrorPage from './component/ErrorPage/ErrorPage.jsx';
import Home from './component/Home/Home.jsx';
import UserDashboardLayout from './component/UsersDashboard/UserDashboardLayout/UserDashboardLayout.jsx';
// import OderManangement from './component/UsersDashboard/UserDashboardPages/OderManangement.jsx';
import AdminDashboardLayout from './component/AdminDashboard/AdminDashboardLayout/AdminDashboardLayout.jsx';
import AdminDashboard from './component/AdminDashboard/AdminDashboardPages/AdminDashboard.jsx';
import AdminDashboardMessage from './component/AdminDashboard/AdminDashboardPages/AdminDashboardMessage.jsx';
import AdminDashboardChats from './component/AdminDashboard/AdminDashboardPages/AdminDashboardChats.jsx';
import AdminDashboardAiChat from './component/AdminDashboard/AdminDashboardPages/AdminDashboardAiChat.jsx';
import AdminDashboardNotification from './component/AdminDashboard/AdminDashboardPages/AdminDashboardNotification.jsx';

import Registration from './component/Shared/Registration/Registration.jsx';
import Login from './component/Shared/Login/Login.jsx';
import ConfirmEmail from './component/Shared/ConfirmEmail/ConfirmEmail.jsx';
import Verification from './component/Shared/Verification/Verification.jsx';
import ConfirmPassword from './component/Shared/ConfirmPassword/ConfirmPassword.jsx';
import PasswordChangeSuccesfully from './component/Shared/PasswordChangeSuccesfully/PasswordChangeSuccesfully.jsx';

import OrderManagement from './component/UsersDashboard/UserDashboardPages/OrderManagement/OrderManagement.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  // ----------user dashboard---------
  {
    path: "/dashboard",
    element: (<UserDashboardLayout />),
    children: [
      {
        index: true,
        element: <OrderManagement />
      },
     
      
     
    ]
  },



  //--------------admin dashboard----------

  {
    path: "/Admin_Dashboard",
    element: <AdminDashboardLayout />,
    children: [
      {
        index: true,
        element: <AdminDashboard />
      },
      {
        path: "Message", // Relative path under /Admin_Dashboard
        element: <AdminDashboardMessage />,
        children: [
          {
            path: ":id", // Relative path under /Admin_Dashboard/Message
            element: <AdminDashboardChats />
          },
          {
            path:"chatbot",
            element:<AdminDashboardAiChat/>
          }
        ]
      },
      {
        path:"/Admin_Dashboard/notification",
        element:<AdminDashboardNotification/>
      }
    ]
  },
  // .................Athentications.................
  
  {
    path:"/registration",
    element:<Registration/>
    

  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/confirm_email',
    element:<ConfirmEmail/>
  },
  {
    path:'/verification',
    element:<Verification/>
  },
  {
    path:'/confirm_password',
    element:<ConfirmPassword/>
  },
  {
    path:'/password_change_succesfull',
    element:<PasswordChangeSuccesfully/>
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </StrictMode>,
)

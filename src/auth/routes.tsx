import { createBrowserRouter, Navigate } from "react-router-dom";
import { AuthGaurd } from "./authGaurd";
import Login from "../pages/login";
import VerifyOtp from "../pages/verify-otp";
import UserDetails from "../pages/user-details";
import ExisitngUser from "../pages/existing-user";
import Container from "../pages/container";


const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Navigate to={'/login'} />
        },
        {
        element: <AuthGaurd></AuthGaurd>,
        children: [
            {
                index: true,
                element: <Container/>,
            },
            {
                path: '/login',
                element: <Login/>,
            },
            {
                path: '/otp',
                element: <VerifyOtp/>,
            },
            {
                path: '/details',
                element: <UserDetails/>,
            },
            {
                path: '/success',
                element: <ExisitngUser/>,
            }
        ]
        },
        {
            path: '*',
            element: <Login />
        }
    ]
  );

  export default router;
import { createBrowserRouter } from "react-router-dom";
import AddService from "../../Components/AddService";
import AllServices from "../../Components/AllServices";
import Blog from "../../Components/Blog";
import Home from "../../Components/Home/Home";
import LogIn from "../../Components/LogIn";
import MyReview from "../../Components/MyReview";
import NotFound404 from "../../Components/NotFound404";
import ServiceDetails from "../../Components/ServiceDetails";
import SignUp from "../../Components/SignUp";
import Main from "../../Layout/Main";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`https://a-11-service-review-server-side-mostafiz-cw.vercel.app/services/${params.id}`),
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: "/login",
        element: <LogIn></LogIn>
      },
      {
        path: "/addservice",
        element: <PrivateRoute><AddService></AddService></PrivateRoute>
      },
      {
        path: "/myreview",
        element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
      },
      {
        path: '/service',
        element: <AllServices></AllServices>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      }
    ],
  },
  {
    path: '*',
    element: <NotFound404></NotFound404>
  }
]);

export default router;

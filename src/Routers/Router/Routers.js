import { createBrowserRouter } from "react-router-dom";
import AddService from "../../Components/AddService";
import AllServices from "../../Components/AllServices";
import Blog from "../../Components/Blog";
import Home from "../../Components/Home/Home";
import LogIn from "../../Components/LogIn";
import MyReview from "../../Components/MyReview";
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
          fetch(`http://localhost:5000/services/${params.id}`),
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
        path: '/allservice',
        element: <AllServices></AllServices>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      }
    ],
  }
]);

export default router;

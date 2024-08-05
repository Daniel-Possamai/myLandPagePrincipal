import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/home";
import Socials from "./pages/socials/social";




export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/socials",
      element: <Socials />,
    },
  ]);
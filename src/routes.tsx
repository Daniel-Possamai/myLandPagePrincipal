import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/home";
import Socials from "./pages/socials/social";
import NotFound from "./pages/notfound/notfound";




export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/socials",
      element: <Socials />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
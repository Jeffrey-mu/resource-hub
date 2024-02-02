import { createBrowserRouter } from "react-router-dom";
import Game from "@/pages/Game";
import Helpers from "@/pages/Helpers";
import Contact from "@/pages/Contact";
import About from "@/pages/About";
import Layout from "./components/common/Layout";
import Licensing from "@/pages/Licensing";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Helpers />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "game",
        element: <Game />,
      },
      {
        path: "licensing",
        element: <Licensing />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;

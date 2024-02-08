import { createBrowserRouter } from "react-router-dom";
import Game from "@/pages/Game";
import Helpers from "@/pages/Helpers";
import Nodejs from "@/pages/Awesome/Nodejs";
import Javascript from "@/pages/Awesome/Javascript";
import Contact from "@/pages/Contact";
import About from "@/pages/About";
import Layout from "@/components/common/Layout";
import Licensing from "@/pages/Licensing";
import Python from "@/pages/Awesome/Python";
import Go from "@/pages/Awesome/Go";
import Java from "@/pages/Awesome/Java";
import Vue from "@/pages/Awesome/Vue";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Helpers />,
      },
      {
        path: "/awesome-nodejs",
        element: <Nodejs />,
      },
      {
        path: "/awesome-javascript",
        element: <Javascript />,
      },
      {
        path: "/awesome-python",
        element: <Python />,
      },
      {
        path: "/awesome-java",
        element: <Java />,
      },
      {
        path: "/awesome-vue",
        element: <Vue />,
      },
      {
        path: "/awesome-go",
        element: <Go />,
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

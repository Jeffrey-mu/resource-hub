import { createBrowserRouter } from "react-router-dom";
import Game from "@/pages/Game";
import Resource from "@/pages/Resource";
import About from "@/pages/About";
import Layout from "./components/common/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Resource />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "game",
        element: <Game />,
      },
    ],
  },
]);

export default router;

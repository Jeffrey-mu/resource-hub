import Game from "@/pages/Game";
import Helpers from "@/pages/Helpers";
import About from "@/pages/About";
import Nodejs from "@/pages/Awesome/Nodejs";
import Javascript from "@/pages/Awesome/Javascript";
import Contact from "@/pages/Contact";
import Licensing from "@/pages/Licensing";
import Python from "@/pages/Awesome/Python";
import Go from "@/pages/Awesome/Go";
import Java from "@/pages/Awesome/Java";
import Vue from "@/pages/Awesome/Vue";
interface Config {
  siteName: string;
}
export const appConfig: Config = {
  siteName: "Resource Hub",
};

export const game_service_path = "http://101.43.206.247:3230";

type MenuItem = {
  label: string;
  path: string;
  element?: React.ReactNode;
  des?: string;
  hide?: boolean;
  children?: MenuItem[];
};

type MenuItems = MenuItem[];

export const menuItems: MenuItems = [
  {
    label: "Helpers",
    path: "/",
    element: <Helpers />,
  },
  {
    label: "Awesome",
    path: "/awesome-nodejs",
    des: "The Awesome series is a carefully selected resource list that covers various themes and fields.",

    children: [
      {
        label: "Nodejs",
        path: "/awesome-nodejs",
        element: <Nodejs />,
      },
      {
        label: "Javascript",
        path: "/awesome-javascript",
        element: <Javascript />,
      },
      {
        label: "Python",
        path: "/awesome-python",
        element: <Python />,
      },
      {
        label: "Go",
        path: "/awesome-go",
        element: <Go />,
      },
      {
        label: "Java",
        path: "/awesome-java",
        element: <Java />,
      },
      {
        label: "Vue",
        path: "/awesome-vue",
        element: <Vue />,
      },
    ],
  },
  {
    label: "Game",
    path: "/game",
    element: <Game />,
  },
  {
    label: "Licensing",
    path: "/licensing",
    element: <Licensing />,
    hide: true,
  },
  {
    label: "Contact",
    path: "/contact",
    element: <Contact />,
    hide: true,
  },
  {
    label: "About",
    path: "/about",
    element: <About />,
    hide: true,
  },
];

import Game from "@/pages/Game";
import Helpers from "@/pages/Helpers";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Licensing from "@/pages/Licensing";
import Awesome from "@/pages/Awesome/Index";
import NodeSvg from "@/components/svg/Node";
import VueSvg from "@/components/svg/Vue";
import JavascriptSvg from "@/components/svg/Javascript";
import ReactSvg from "@/components/svg/React";
import GoSvg from "@/components/svg/Go";
import JavaSvg from "@/components/svg/Java";
import PythonSvg from "@/components/svg/Python";
interface Config {
  siteName: string;
}
export const appConfig: Config = {
  siteName: "Resource Hub",
};

export const game_service_path = "http://101.43.206.247:3230";

export type MenuItem = {
  label: string;
  path: string;
  element?: React.ReactNode;
  des?: string;
  hide?: boolean;
  icon?: React.ReactNode;
  children?: MenuItem[];
  params?: MenuItem[];
};

export type MenuItems = MenuItem[];

export const menuItems: MenuItems = [
  {
    label: "Helpers",
    path: "/",
    element: <Helpers />,
  },
  {
    label: "Awesome",
    path: "/Awesome/:type",
    des: "The Awesome series is a carefully selected resource list that covers various themes and fields.",
    element: <Awesome />,
    params: [
      { label: "nodejs", path: "/nodejs", icon: <NodeSvg /> },
      { label: "javascript", path: "/javascript", icon: <JavascriptSvg /> },
      { label: "go", path: "/go", icon: <GoSvg /> },
      { label: "java", path: "/java", icon: <JavaSvg /> },
      { label: "vue", path: "/vue", icon: <VueSvg /> },
      { label: "react", path: "/react", icon: <ReactSvg /> },
      { label: "python", path: "/python", icon: <PythonSvg /> },
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

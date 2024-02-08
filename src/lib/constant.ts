interface Config {
  siteName: string;
}
export const appConfig: Config = {
  siteName: "Resource Hub",
};

export const game_service_path = "http://101.43.206.247:3230";

export const menuItems = [
  {
    label: "Helpers",
    path: "/",
  },
  {
    label: "Awesome",
    path: "/awesome-nodejs",
    childen: [
      {
        label: "Nodejs",
        path: "/awesome-nodejs",
      },
      {
        label: "Javascript",
        path: "/awesome-javascript",
      },
      {
        label: "Python",
        path: "/awesome-python",
      },
      {
        label: "Go",
        path: "/awesome-go",
      },
      {
        label: "Java",
        path: "/awesome-java",
      },
      {
        label: "Vue",
        path: "/awesome-vue",
      },
    ],
  },

  {
    label: "Game",
    path: "/game",
  },
  // {
  //   label: "About",
  //   path: "/about",
  // },
];

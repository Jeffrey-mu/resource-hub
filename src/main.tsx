import { createRoot } from "react-dom/client";
import router from "./router";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { RouterProvider } from "react-router-dom";
const domNode = document.getElementById("root");
if (domNode) {
  const root = createRoot(domNode);
  root.render(
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <RouterProvider router={router} />
      </NextThemesProvider>
    </NextUIProvider>,
  );
}

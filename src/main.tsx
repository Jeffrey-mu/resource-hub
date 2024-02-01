import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
const domNode = document.getElementById("root");
if (domNode) {
  const root = createRoot(domNode);
  root.render(
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <App />
      </NextThemesProvider>
    </NextUIProvider>,
  );
}

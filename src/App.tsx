import { Routes, Route, BrowserRouter } from "react-router-dom";
import Game from "@/pages/Game";
import Resource from "@/pages/Resource";
import About from "@/pages/About";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App bg-slate-20 dark:bg-transparent">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Resource />} />
            <Route path="/game" element={<Game />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

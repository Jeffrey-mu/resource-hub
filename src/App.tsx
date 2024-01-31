import { Routes, Route, BrowserRouter } from "react-router-dom"
import Game from "@/pages/Game"
import About from "@/pages/About"
import Layout from "./components/Layout";

function App() {
 return (
   <div className="App">
     <BrowserRouter>
       <Routes>
         <Route element={<Layout />} >
           <Route path="/" element={<Game />} />
           <Route path="/about" element={<About />} />
         </Route>
       </Routes>
     </BrowserRouter>
   </div>
 )
}

export default App

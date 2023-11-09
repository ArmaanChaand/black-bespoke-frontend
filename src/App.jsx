import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

import {register} from "swiper/element/bundle";
register();

function App() {
  return (
    <div className="bg-theme-black">
      <main>
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

import {register} from "swiper/element/bundle";
import Header from "./components/Header";
import { useContext } from "react";
import { CommonContext } from "./contexts/CommonContexts";
import Sidebar from "./components/Sidebar";
register();

function App() {
  const {showSidebar, setShowSidebar} = useContext(CommonContext)
  return (
    <div className="bg-theme-black">
      {showSidebar && <Sidebar setShowSidebar={setShowSidebar}/>}
      <Header/>
      <main className="bg-theme-black">
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App

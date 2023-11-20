import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

import {register} from "swiper/element/bundle";
import Header from "./components/Header";
import { useContext } from "react";
import { CommonContext } from "./contexts/CommonContexts";
import Sidebar from "./components/Sidebar";
import OurProcess from "./pages/process/Process";
import ApptWalkthrough from "./components/pop_ups/ApptWalkthrough";
register();

function App() {
  const {showSidebar, setShowSidebar, walkthroughStage, setWalkthroughStage} = useContext(CommonContext)
  return (
    <div className="bg-theme-black">
      {showSidebar && <Sidebar setShowSidebar={setShowSidebar}/>}
      {walkthroughStage && <ApptWalkthrough walkthroughStage={walkthroughStage}  setWalkthroughStage={setWalkthroughStage}/>}
      <Header/>
      <main className="bg-theme-black">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/process" element={<OurProcess/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App

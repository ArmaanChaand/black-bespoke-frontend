import "./App.css";
import  { Route, Routes,  } from "react-router-dom";
import React from "react";

import {register} from "swiper/element/bundle";
import { useContext } from "react";
import { CommonContext } from "./contexts/CommonContexts";
import Sidebar from "./components/Sidebar";
import ApptWalkthrough from "./components/pop_ups/ApptWalkthrough";
import { PrimaryAnchorBtn, PrimaryBtnTwo } from "./components/elements/Buttons";
import { SVGWrapper } from "./components/elements/SVGWrapper";
import { ContainerDiv } from "./components/elements/Container";

const OurProcess = React.lazy(()=> import("./pages/process/Process"))
const SuitBuild = React.lazy(()=> import("./pages/suit_build/SuitBuild"))
const Home = React.lazy(()=> import("./pages/home/Home"))

register();

function App() {
  const {showSidebar, setShowSidebar, walkthroughStage, setWalkthroughStage} = useContext(CommonContext)
  return (
    <>
      {showSidebar && <Sidebar setShowSidebar={setShowSidebar}/>}
      {
        walkthroughStage && 
          <ApptWalkthrough 
          walkthroughStage={walkthroughStage}  
          setWalkthroughStage={setWalkthroughStage}
          />
      }
      <PrimaryAnchorBtn href="https://api.whatsapp.com/send/?phone=%2B919559070660&text=Hello%20there!&type=phone_number&app_absent=0" target="_blank" classes="fixed block right-10 bottom-10 z-50 rounded-full w-10 aspect-square flex jusctify-center items-center">
        <SVGWrapper
          svgName="WHATSAPP"
          classes="stroke-1 flex-none w-10 stroke-theme-gold fill-theme-gold"

        />
      </PrimaryAnchorBtn>
      <main className="bg-theme-black/50 min-h-fit">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/process" element={<OurProcess/>}/>
            <Route path="/suit-build" element={<SuitBuild/>}/>
        </Routes>
      </main>
    </>
  )
}

export default App

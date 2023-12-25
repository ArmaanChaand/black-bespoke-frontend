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
import SuitBuild from "./pages/suit_build/SuitBuild";
import { PrimaryAnchorBtn, PrimaryBtn, PrimaryBtnTwo } from "./components/elements/Buttons";
import { SVGWrapper } from "./components/elements/SVGWrapper";
import { ContainerDiv } from "./components/elements/Container";
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
      {/* <Header/> */}
      <ContainerDiv
        classes="fixed mx-auto left-1/2 -translate-x-1/2 flex justify-center items-center pt-10 z-50"
      >
        <PrimaryBtnTwo
          className="ml-auto"
        >
        Build your suit
        </PrimaryBtnTwo>
      </ContainerDiv>
      <PrimaryAnchorBtn href="https://api.whatsapp.com/send/?phone=%2B919559070660&text=Hello%20there!&type=phone_number&app_absent=0" target="_blank" classes="fixed block right-10 bottom-10 z-50 rounded-full w-10 aspect-square flex jusctify-center items-center">
        <SVGWrapper
          svgName="WHATSAPP"
          classes="stroke-1 flex-none w-10 stroke-theme-gold fill-theme-gold"

        />
      </PrimaryAnchorBtn>
      <main className="bg-theme-black/80 min-h-fit">
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

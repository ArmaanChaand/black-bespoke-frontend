import { useContext } from "react";
import "./App.css";
import { CommonContext } from "./contexts/CommonContexts";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
function App() {
  const {testData} = useContext(CommonContext)
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

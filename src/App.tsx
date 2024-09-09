import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Req from "./pages/Req";
import Extract from "./pages/Extract";

export default function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/res' element={<Req/>}/>
        <Route path='/extract' element={<Extract/>}/>
      </Routes>
    </>
  )
}
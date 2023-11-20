import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Scope } from "./pages/Scope";
import { Hoisting } from "./pages/Hoisting";
import { Navbar } from "./components/Navbar";
import { BarScope } from "./pages/BarScope";
import { Closures } from "./pages/Closures";
import { BarClosure } from "./components/BarScript/BarClosure";
import { Footer } from "./components/Footer";
import { BarHoisting } from "./components/BarScript/BarHoisting";



function App() {
  return (
    <>
    
      <BrowserRouter>
 
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/scope" element={<Scope/>}/>
        <Route path="/hoisting" element={<Hoisting/>}/>
        <Route path="/closures" element={<Closures/>}/>
        <Route path="/barscope/:ambitoSelected" element={<BarScope/>}/>
        <Route path="/barclosure" element={<BarClosure/>}/>
        <Route path="/barhoisting" element={<BarHoisting/>}/>

      </Routes>
      </BrowserRouter>
      <Footer/>

    </>
  );
}

export default App;

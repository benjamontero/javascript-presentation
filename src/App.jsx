import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Scope } from "./pages/Scope";
import { Hoisting } from "./pages/Hoisting";
import { Navbar } from "./components/Navbar";
import { BarScope } from "./pages/BarScope";



function App() {
  return (
    <>
    
      <BrowserRouter>
 
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/scope" element={<Scope/>}/>
        <Route path="/hoisting" element={<Hoisting/>}/>
        <Route path="/barscope" element={<BarScope/>}/>

      </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;

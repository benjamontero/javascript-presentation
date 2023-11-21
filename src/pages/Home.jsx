import React from 'react'
import barScript from '../assets/barScriptLogo.png'
import { Link } from 'react-router-dom'
export const Home = () => {
  return (
    <>
    <div>
    <Link href="/">
      <img src={barScript} className="logo" alt="Vite logo" />
    </Link>
   
  </div>
  <h1>SCOPE <span>+</span> HOISTING <span>+</span> CLOSURE </h1>
  <h2>Bienvenidos a BarScript</h2>
  
  <div className="card">
    <button><Link to="/scope"><span>S</span>cope</Link></button>
    <button><Link to="/hoisting"><span>H</span>oisting</Link></button>
    <button><Link to="/closures"><span>C</span>losure</Link></button>

  </div>
  <p className="read-the-docs">
    App solo para exposicion - esta lleno de malas practicas - Perdonanos Alan
  </p>
  </>
  )
}

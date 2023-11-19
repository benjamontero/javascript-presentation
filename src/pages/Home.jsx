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
  <h1>SCOPE + HOISTING + CLOUSURE </h1>
  <h2>Bienvenidos a BarScript</h2>
  
  <div className="card">
    <button><Link to="/scope">Scope</Link></button>
    <button><Link to="/hoisting">Hoisting</Link></button>
    <button><Link to="/closures">Clousure</Link></button>

  </div>
  <p className="read-the-docs">
    App solo para exposicion - esta lleno de malas practicas - Perdoname Alan
  </p>
  </>
  )
}

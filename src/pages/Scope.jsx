import React from "react";
import { Link } from "react-router-dom";
import globalVariable from "../assets/globalVariable.png"

export const Scope = () => {
  return (
    <div className="presentation">
      <h1>Scope</h1>
      <h2>
        En JavaScript, el ámbito se refiere a la visibilidad y accesibilidad de
        las variables en una parte específica del código. Hay dos tipos
        principales de ámbito: el ámbito global y el ámbito local.
      </h2>
     
      <div className="card-definition">
       <h3>Ámbito Global</h3>
       <p>Las variables declaradas fuera de cualquier función tienen un ámbito global.</p>
      </div>
      <h4>Codigo de ejemplo</h4>
      <div className="card-explication">
         <img src={globalVariable}/>
      </div>
      <button><Link to="/barscope">Go to BarScript</Link></button>

     
    </div>
  );
};

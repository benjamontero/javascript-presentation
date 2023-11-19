import React, { useState } from "react";
import { Link } from "react-router-dom";

import globalVariable from "../assets/globalVariable.png";
import localVariable from "../assets/localVariable.png";
import bloquevariable from "../assets/bloquevariable.png";
import anidamientoVariable from "../assets/anidamientoVariable.png"

export const Scope = () => {
  return (
    <div className="presentation">
      <h1>Scope</h1>
      <h2>
        En JavaScript, el ámbito se refiere a la visibilidad y accesibilidad de
        las variables en una parte específica del código. Hay dos tipos
        principales de ámbito: el ámbito global y el ámbito local.
      </h2>

      {/* Ambito Global */}

      <div className="card-definition">
        <h3>Ámbito Global</h3>
        <p>
          Las variables declaradas fuera de cualquier función tienen un ámbito
          global.
        </p>
      </div>
      <h4>Codigo de ejemplo</h4>
      <div className="card-explication">
        <img src={globalVariable} />
      </div>
      <button>
        <Link to="/barscope/global">Go to BarScript</Link>
      </button>

      {/* Ambito Local */}

      <div className="card-definition">
        <h3>Ámbito Local</h3>
        <p>
          Las variables declaradas dentro de una función tienen un ámbito local
          y solo son accesibles dentro de esa función.
        </p>
      </div>
      <h4>Codigo de ejemplo</h4>
      <div className="card-explication">
        <img src={localVariable} />
      </div>
      <button>
        <Link to="/barscope/local">Go to BarScript</Link>
      </button>

      {/* Ambito de bloque */}

      <div className="card-definition">
        <h3>Ámbito de Bloque</h3>
        <p>
          Con la introducción de let y const en ES6, se introdujo el ámbito de
          bloque, lo que significa que las variables están limitadas al bloque
          de código más cercano.
        </p>
      </div>
      <h4>Codigo de ejemplo</h4>
      <div className="card-explication">
        <img src={bloquevariable} />
      </div>
      <button>
        <Link to="/barscope/bloque">Go to BarScript</Link>
      </button>

      {/* Anidamiento de ambitos */}

      <div className="card-definition">
        <h3>Anidamiento de Ámbitos</h3>
        <p>
          Las funciones pueden estar anidadas, y cada función tiene su propio
          ámbito, lo que permite el acceso a variables de ámbitos superiores.
        </p>
      </div>
      <h4>Codigo de ejemplo</h4>
      <div className="card-explication">
        <img src={anidamientoVariable} />
      </div>
      <button>
        <Link to="/barscope/anidado">Go to BarScript</Link>
      </button>
    </div>
  );
};

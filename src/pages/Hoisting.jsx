import React from "react";
import { Link } from "react-router-dom";

export const Hoisting = () => {
  return (
    <div className="presentation">
      <h1>Hoisting</h1>
      <h2>
        Hoisting es un comportamiento en JavaScript donde las declaraciones de
        variables y funciones son movidas (elevadas) al comienzo de su contexto
        de ejecución durante la fase de compilación, antes de que el código se
        ejecute.
      </h2>

      <div className="card-definition">
        <h3>Como Funciona?</h3>
        <p>
          Durante la fase de compilación, las declaraciones de variables y
          funciones se mueven a la parte superior de su ámbito (scope) sin
          importar dónde se hayan definido en el código.
        </p>
        <p>
          El hoisting no implica mover la asignación de valor, solo la
          declaración. Esto significa que las variables se inicializan con
          undefined y las funciones están listas para ser utilizadas.
        </p>
      </div>
      <h2>Tipos de Hoisting</h2>
      <p>
        <strong>Variables declaradas con var:</strong> La declaración se mueve
        al principio del ámbito, pero la asignación de valor permanece en su
        lugar.
      </p>
      <p>
        <strong>Variables declaradas con let y const:</strong> Aunque también
        son elevadas, las variables declaradas con let y const no son
        inicializadas con un valor hasta que se alcanza su declaración en el
        código.
      </p>
      <button>
      <Link to="/scope">Go to BarScript</Link>
      </button>
      <button>
        <Link to="/">Volver a Home</Link>
      </button>
    </div>
  );
};

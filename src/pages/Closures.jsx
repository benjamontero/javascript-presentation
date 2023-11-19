import React from "react";
import { Link } from "react-router-dom";

export const Closures = () => {
  return (
    <div className="presentation">
        <h1>Closures</h1>
        <h2>
            Los closures en Javascript son un concepto estrechamente relacionado con el encapsulamiento. Consisten en una funcion que tiene acceso a variables en su ambito externo, incluso despues de que la funcion externa haya finalizado su ejecucion.
        </h2>

        <div className="card-definition">
            <h3>Como Funciona?</h3>
            <p>
            Los closures se basan en el concepto de ambitos lexicos, lo que significa que las funciones pueden acceder a variables definidas en su entorno externo. Para lograrlo se utilizan las referencias, cuando una funcion interna hace referencia a variables de una funcion externa, el motor de JavaScript mantiene viva esa "cadena" de referencias. <br/> Se utilizan en situaciones donde se requiere mantener el estado de una variable a lo largo del tiempo, incluso despues de que la funcion que creo haya finalizado. Son muy utiles a la hora de crear funciones generadoras, manejar eventos, mantener el estado y aplicaciones asincronas.
            </p>
            <h3>Ejemplo</h3>
            <div className="code-ejemplo">
                <pre>
                    <code>
                        {
                    `function contador() {
let count = 0;

    function incremento() {
        count++;
        console.log(count);
    }

    return incremento;
}

const incrementador = contador();
incrementador(); // Imprimira 1
incrementador(); // Imprimira 2` 
                        }
                    </code>
                </pre>
            </div>
            <p>
                En este ejemplo 'incrementador' es una funcion que se creo dentro de 'contador' y tiene acceso al valor de 'count' incluso despues de que 'contador' ha termiando de ejecutarse.
            </p>
        </div>


      <button>
        <Link to="/barclosure">Go to BarScript</Link>
      </button>
    </div>
  );
};
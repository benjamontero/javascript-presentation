import React from "react";
import chefScript from "../../assets/chefscript.png";
import cocineroScript from "../../assets/cocineroScript.png";
import { Link } from "react-router-dom";

export const AmbitoGlobal = () => {
  return (
    <>
      <p>
        Vamos a explicar que significa una <strong>VARIABLE GLOBAL</strong> con
        un ejemplo de la vida cotidiana. Como vimos en la explicacion anterior,
        una variable global es aquella que se puede acceder desde cualquier
        parte del codigo y que es declarada fuera de cualquier funcion.
      </p>
      <div className="card-definition">
        <h3>EJEMPLO: Receta de Ambito Global</h3>
        <div className="code-ejemplo">
          <pre>
            <code>
              {`// Variables globales que representan los ingredientes para hacer pizza de muzzarella
const masa = "masa";
const salsaDeTomate = "salsa de tomate";
const quesoMuzzarella = "queso muzzarella";`}
            </code>
          </pre>
        </div>
      </div>
      <div className="scope-card-empleados">
        <img
          className="img-logo-barScript"
          src={chefScript}
          alt="chef de BarScript"
        />
        <h3>CHEF</h3>
        <p>
          Fue quien creo las variables globales con los ingredientes principales
          de la pizza y la funcion <strong>hacerPizzaMuzzarella()</strong> para
          saber como cocinarla
        </p>
      </div>
      <div className="card-definition code-ejemplo">
        <code> // Funcion de como cocinar la pizza de muzzarella </code> <br />
        <pre>
          <code>
            {`function hacerPizzaMuzzarella() {
// La función hace uso de las variables globales directamente.
  console.log("Paso 1: Extender la " + masa);
  console.log("Paso 2: Agregar la " + salsaDeTomate);
  console.log("Paso 3: Esparcir el " + quesoMuzzarella);
  console.log("¡Pizza de muzzarella lista para hornear!");}`}
          </code>
        </pre>
      </div>
      <div className="scope-card-empleados">
        <img
          className="img-logo-barScript"
          src={cocineroScript}
          alt="chef de BarScript"
        />
        <h3>Cocineros</h3>
        <p>
          Los cocineros pueden acceder correctamente a todas las variables fuera
          de la funcion y tienen todas las herramientas para ejecutar sin
          problemas: <code>hacerPizzaMuzzarella()</code>
        </p>
      </div>
      <button>
        <Link to="/">Volver a Home</Link>
      </button>
    </>
  );
};

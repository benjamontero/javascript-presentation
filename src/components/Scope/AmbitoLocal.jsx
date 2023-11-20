import React from "react";
import chefScript from "../../assets/chefscript.png";
import cocineroScript from "../../assets/cocineroScript.png";
import { Link } from "react-router-dom";

export const AmbitoLocal = () => {
  return (
    <>
      <p>
        Ahora vamos a explicar que significa una <strong>VARIABLE LOCAL</strong>{" "}
        con un ejemplo de la vida cotidiana. A diferencia de un variable global,
        esta se destaca por tener como particularidad ser llamada dentro de un
        ambito de Funcion, lo cual la hace inaccesible por fuera de ese ambito
        (scope)
      </p>
      <div className="card-definition">
        <h3>EJEMPLO: Receta de Ambito Local</h3>
        <div className="code-ejemplo">
          <pre>
            <code>
              {`// Variables globales que representan los ingredientes principales para hacer pizza de muzzarella ESPECIAL
const masa = "masa";
const salsaDeTomate = "salsa de tomate";
const quesoMuzzarella = "queso muzzarella";

// Función para hacer pizza de muzzarella ESPECIAL
function hacerPizzaMuzzarellaEspecial() {
  // Variable local que representa el ingrediente secreto del chef
  const ingredienteSecreto = "toque secreto del chef";

  // La función hace uso de las variables globales y la variable local.
  console.log("Paso 1: Extender la " + masa);
  console.log("Paso 2: Agregar la " + salsaDeTomate);
  console.log("Paso 3: Esparcir el " + quesoMuzzarella);
  console.log("Paso 4: Añadir el " + ingredienteSecreto);
  console.log("¡Pizza de muzzarella lista para hornear!");
}

// Llamamos a la función para hacer pizza de muzzarella ESPECIAL
hacerPizzaMuzzarellaEspecial();`}
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
          En este caso el chef declaro un incrediente(variable), dentro del proceso de <strong>hacerPizzaMuzzarellaEspecial()</strong> con lo cual los cocineros saben como hacer la pizza pero el componente secreto es suministrado por el Chef.
        </p>
      </div>

      <button>
        <Link to="/scope">Volver a Scope</Link>
      </button>

    </>
  );
};

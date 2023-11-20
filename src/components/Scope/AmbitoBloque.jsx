import React from "react";
import chefScript from "../../assets/chefscript.png";
import cocineroScript from "../../assets/cocineroScript.png";
import { Link } from "react-router-dom";


export const AmbitoBloque = () => {
  return (
    <>
      <p>
        Ahora vamos a explicar lo que es un <strong>AMBITO DE BLOQUE</strong>,
        esta explicacion esta muy de la mano de la Variable local, ya que
        contiene un ambito limitado al bloque donde se declaro la misma, seguiremos el ejemplo pero lo modificaremos un poco mas
      </p>
      <div className="card-definition">
        <h3>EJEMPLO: Receta de Ambito de Bloque</h3>
        <div className="code-ejemplo">
          <pre>
            <code>
              {`// Seguiremos con nuestras variables Globales. 
Pero ahora incorporaremos una nueva, una variable que indique que pizza solicito el cliente
let pedidoCliente = "";
const masa = "masa";
const salsaDeTomate = "salsa de tomate";
const quesoMuzzarella = "queso muzzarella";

// Volveremos a llamar a nuestra funcion hacerPizzaMuzzarella
function hacerPizzaMuzzarella() {
    // La función hace uso de las variables globales.
  console.log("Paso 1: Extender la " + masa);
  console.log("Paso 2: Agregar la " + salsaDeTomate);
  console.log("Paso 3: Esparcir el " + quesoMuzzarella);

  //Con este condicional vamos a poder verificar segun el pedido del cliente agregamos o no ingrediente secreto
  if (pedidoCliente === "Muzzarella Especial") {
    // Variable de bloque que representa el ingrediente secreto del chef y que por fuera no se puede acceder
    const ingredienteSecreto = "toque secreto del chef";
    console.log("Paso 4: Añadir el " + ingredienteSecreto);
  }
  console.log("¡Pizza de muzzarella lista para hornear!");
}

// Llamamos a la función para hacer pizza de muzzarella 
hacerPizzaMuzzarella();`}
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
          En este ejemplo nuestro ambito de bloque es nuestro condicional, donde la variable ingrediente secreto se puede encontrar solo en se codigo de Bloque. Si estas entendiendo, el Chefcito te Felicita!!
        </p>
      </div>

      <button>
      <Link to="/scope">Volver a Scope</Link>
      </button>
    </>
  );
};

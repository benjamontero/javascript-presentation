import React from 'react'
import { Link } from 'react-router-dom'
import chefScript from '../../assets/chefscript.png'

export const AmbitoAnidado = () => {
  return (
    <>
      <p>
        Ahora procederemos a explicar el ultimo pero no menos importante, <strong>BLOQUE ANIDADO</strong>, a traves del cual obtenemos la capacidad de tener bloques de codigo dentro de otros bloques, creando asi una especie de jerarquia de alcance.
      </p>
      <div className='card-definition'>
        <h3>EJEMPLO: Receta de Ambito Anidado</h3>
        <div className='code-ejemplo'>
          <pre>
            <code>
              {
                `function FabricaPizzas() {
// Función para preparar la masa de la pizza
  const prepararMasa = () => {
  return (
  <div>
    <h2>Pizza de masa fina</h2>
    <p>¡La masa está lista!</p>
  </div>
  );
  };
                
  // Función para agregar ingredientes a la pizza
  const agregarIngredientes = () => {
  return (
  <div>
  <h3>Ingredientes</h3>
  <ul>
    <li>Tomate</li>
    <li>Queso</li>
    <li>Pepperoni</li>
    </ul>
    </div>
  );
  };
                
  // Función principal para crear la pizza
  const hacerPizza = () => {
  return (
  <div>
    <h1>Haciendo una deliciosa pizza</h1>
    {prepareDough()}
    {addIngredients()}
    <p>¡La pizza está lista para hornear!</p>
  </div>
  );
  };
                
return (
<div className="fabrica-pizzas">
  {hacerPizza()}
</div>
);
}
                
export default FabricaPizzas;` 
              }
            </code>            
          </pre>
        </div>
      </div>

      <div className="scope-card-empleados">
        <img className="img-logo-barScript" src={chefScript} alt="chef de Barscript" />
        <h3>CHEF</h3>
        <p>
          En el ejemplo anterior se ve de que trata el ambito anidado, funciones que se entrelazan las unas con las otras. En este caso vemos, la funcion 'prepararMasa' se encarga de la masa, 'agregarIngredientes' de añadir los ingredientes que el cliente desee y 'hacerPizza' es la funcion principal que llama a las otras dos para crear la pizza completa.
        </p>
      </div>
      <button>
      <Link to="/scope">Volver a Scope</Link>
      </button>
      <button>
        <Link to="/">Volver a Home</Link>
      </button>
    </>
  )
}

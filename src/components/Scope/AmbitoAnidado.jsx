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
                `//En primer lugar crearemos una funcion que en este caso decidimos llamar 'Exterior' y dentro simplemente guardamos una constante.

function Exterior() {
  const x = 10;

//Luego de crear esta constante, dentro de la misma funcion creamos otra funcion, en este caso 'Interior'.

function Interior() {
  const y = 5;
  return (
    <div>
      <p>"La variable externa {x} junto con la variable interna {y}."</p>
    </div>
  );
}

return (
  <div>
    Interior() // Llamada a la funcion Interior desde dentro de la funcion Exterior
  </div>
)
}

export default Exterior;

// De esta manera se puede llamar a la funcion Exterior y a traves de ella acceder a la siguiente funcion Interior junto con sus atributos y valores.` 
              }
            </code>            
          </pre>
        </div>
      </div>

      <div className="scope-card-empleados">
        <img className="img-logo-barScript" src={chefScript} alt="chef de Barscript" />
        <h3>CHEF</h3>
        <p>
          En este ejemplo se demuestra como las funciones pueden estar anidadas entre si, esto es util para controlar la visibilidad y el acceso a variables en diferentes niveles de anidamiento.
        </p>
      </div>
      <button>
        <Link to="/">Volver a Home</Link>
      </button>
    </>
  )
}

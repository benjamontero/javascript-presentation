import React from "react";
import chefScript from "../../assets/chefscript.png"
import { Link } from "react-router-dom";

export const BarClosure = () => {
    return (
    <div className="presentation">
        <p>
            Procederemos a realizar un ejemplo mas sencillo de que son y como funcionan los closures. Para ello imaginemos que estamos creando un "constructor de pizzas" donde creamos diferentes tipos de pizzas y podemos agregar ingredientes a ella.
        </p>
        <div className='card-definition'>
            <h3>EJEMPLO: Receta de Closure</h3>
            <div className='code-ejemplo'>
                <pre>
                    <code>
                    {
                    `// Creamos una funcion para hacer la pizza
function hacerPizza() {
    let ingredientes = []; // Lista de ingredientes que llevara la pizza

    function agregarIngrediente(ingrediente) {
        ingredientes.push(ingrediente);
        console.log('Se agrego $ {ingrediente} a la pizza.')
        console.log('Ingredientes: $ {ingredientes.join(',')}');
    }

    return agregarIngrediente;
}

const crearPizza = hacerPizza();

crearPizza('Queso'); // Agrega queso a la pizza
crearPizza('Tomate'); // Agrega tomate a la pizza` 
                    }
                    </code>            
                </pre>
            </div>
            <p>
                Para entenderlo vayamos por partes: <br/>
                - La funcion 'hacerPizza' es la fabrica de pizzas, cuando se la llama nos da una "receta" para hacer pizzas. <br/>
                - 'ingredientes' es la lista de ingredientes, que solo el "fabricante de pizzas" puede acceder. <br/>
                - 'agregarIngrediente' es lo que añade ingredientes a la pizza. <br/>
                - 'crearPizza' es como pedir una pizza especifica de la fabrica, y esta pizza tendra sus propios ingredientes y que ademas pueden añadirse mas.
            </p>
        </div>

        <div className="scope-card-empleados">
            <img className="img-logo-barScript" src={chefScript} alt="chef de Barscript" />
            <h3>CHEF</h3>
            <p>
                De esta manera 'crearPizza' es una pizza individual que pueden añadirse ingredientes, y el fabricante de pizzas('hacerPizza') tiene acceso a esa lista de ingredientes para agregar mas cuando se lo invoque.
            </p>
        </div>

        <button>
            <Link to="/">Go back to Home</Link>
        </button>
    </div>
    );
  };
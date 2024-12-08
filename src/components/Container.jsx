import { useState } from "react";
import  Taula  from "./Taula";
import {components} from '../model/ComponentPC';
import './Container.css';


export function Container(){
    let [titol, setTitol] = useState("Titol Llista");
    let [total, setTotal] = useState(0);
    let [llista, setComponents] = useState(components);
    let [header, setHeader] = useState(["Nombre","Categoría","Marca","Precio","Stock","Núcleos","Frecuencia","VRAM","TDP"]);

    function reiniciarLlista() {
      setComponents(components);
      }

    function canviTitol() {
        let nouTitol = prompt("Nou titol:")
        if (nouTitol) {
          setTitol(nouTitol);
      }}
      function canviHeader() {
        let nouHeader = prompt("Introdueix el header a canvair (Nom):");
        header.forEach((element, index) => {
          if (element === nouHeader) {
            header[index] = prompt("Introdueix el nou header:");
          }
        });
        setHeader([...header]);
      }


      function totalitzarPreu() {
        const total = components.reduce((acc, component) => {
            if (!isNaN(component.precio)) {
                return acc + component.precio;
            }
            return acc;
        }, 0);
        setTotal(total);
      }

      function afegirComponent() {
        const nouComponent = {
          nombre: prompt("Nom del component:"),
          categoria: prompt("Categoria del component:"),
          marca: prompt("Marca del component:"),
          precio: parseFloat(prompt("Preu del component:")),
          stock: parseInt(prompt("Stock del component:"))
        };

        if (nouComponent.categoria === "CPU") {
          nouComponent.nucleos = parseInt(prompt("Nucleos del component:"));
          nouComponent.frecuencia = parseFloat(prompt("Frecuencia del component:"));
        }
        if (nouComponent.categoria === "GPU") {
          nouComponent.vram = parseInt(prompt("VRAM del component:"));
          nouComponent.frecuencia = parseFloat(prompt("Frecuencia del component:"));
        }
        setComponents(prevComponents => [...prevComponents, nouComponent]);
      }
      
      function eliminarOrdenacio() {
        setComponents(components);
      }

      function ordenarComponents(criterio) {
        const componentsOrdenats = [...llista].sort((a, b) => {
            switch (criterio) {
                case 'Nucleos':
                    return a.nucleos - b.nucleos;
                case 'Precio':
                    return a.precio - b.precio;
                case 'Stock':
                    return a.stock - b.stock;
                case 'Categoría':
                    return a.categoria.localeCompare(b.categoria);
                case 'Marca':
                    return a.marca.localeCompare(b.marca);
                case 'Nombre':
                    return a.nombre.localeCompare(b.nombre);
                default:
                    return 0;
            }
        });
        setComponents(componentsOrdenats);
    }
  
    function filtrarComponents(event) {
      if (event.target.checked) {
        const componentsFiltrats = components.filter(component => component.stock > 0);
        setComponents(componentsFiltrats);
      } else {
        setComponents(components);
      }
    }
    
       

    return(
        <>
        <h1 onClick={canviTitol}>{titol}</h1>
        <label>
          <input  className="checkbox"
            type="checkbox" 
            onChange={filtrarComponents} 
          /> Mostrar solo disponibles
        </label>
        <table className="taula">
        <thead>
                <tr>
                    {header.map((element, index) => {
                        return <th key={index}>{element} 
                        <button style={{ borderRadius: '50px', backgroundColor: 'black', fontSize: '10px'}} onClick={() => ordenarComponents(element)}>sort</button>
                        
                        </th>;
                    })}
                </tr>
            </thead>
       
          
            <Taula components={llista}/>
       
        </table>
        <>
            <p>Total: {total.toFixed(2)} €</p>
            <button onClick={canviTitol}>Canvia el titol</button>
            <button onClick={() => setTitol("Titol Llista")}>Reinicia el titol</button>
            <button onClick={totalitzarPreu}>Totalitzar preu</button>
            <button onClick={afegirComponent}>Afegir component</button>
            <button onClick={canviHeader}>Canviar header</button>
            <button onClick={reiniciarLlista}>Restaurar taula</button>
            <button onClick= {eliminarOrdenacio}>Eliminar ordre</button>
            
        </>
        </>
    )
}
export default Container;
import { useState } from "react";
import estilos from "./SearchBar.module.css";

export default function SearchBar({onSearch}) {

   const [characters,setCharacters] = useState("");
  
   const handleChange = (event) => {
      setCharacters(event.target.value)
   }
 
   return (
      <div>
         <input className={estilos.input} type='search' value={characters} onChange={handleChange} />
         <button className={estilos.boton} onClick={() => onSearch(characters)}>Agregar</button>
         </div>
   );
}

import Card from '../Card/Card';
import estilos from "./Cards.module.css"

export default function Cards({ characters, onClose }) {
   
   return( 
   <div className={estilos.cards}>
      {
         characters.map((char)=>{
            return <Card 
                key={char.id}
            name ={char.name}
            species ={char.species}
            gender ={char.gender}
            image ={char.image}
            onClose={()=> onClose(char.id)}
            />
         }
        
         )
      }

   </div>)
}

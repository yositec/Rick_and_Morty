import card from "./Card.module.css"

export default function Card(props) {
   return (
      <div className={card.contenedor}>
      <div className = {card.divprincipal}>
       
         
         <div className={card.divimage}>
         <button className={card.button} onClick={props.onClose}>X</button>
         <img className={card.image} src={props.image} alt="" /> 
         <div className={card.nombre}>{props.name}</div>
         </div>
         <div className={card.subtitle}>
         <li>{props.species}</li>
         <li>{props.gender}</li>
         </div>
      </div>
      </div>
   );
}

import './App.css'
import Cards from './components/Cards/Cards.jsx'
//import characters from './data.js'
import NavBar from './components/NavBar/NavBar'
import { useState } from 'react'

function App () {

  const [characters,setCharacters] = useState([
    
  ]);

  const onSearch = (characters) => {
    fetch(`https://rickandmortyapi.com/api/character/${characters}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
  }

  const onClose=(id)=>{
    setCharacters([
      ...characters,
      characters.filter(characters => characters.id !== id)
    ])
  }

  return (
    <div className='App'>
      <NavBar onSearch={onSearch} />
      <div>
        <Cards
        onClose={onClose}
          characters={characters}
        />
      </div>
    </div>
  )
}

export default App

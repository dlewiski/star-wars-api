import {useState, useEffect} from 'react'
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getStarWarsCharacters = async () => {
      const response = await fetch('https://swapi.dev/api/people/10', {method: 'GET', mode: 'no-cors' })
      // const character = await response.json()
      console.log(response)
    }
    getStarWarsCharacters();
  }, [])
  return (
    <div className="App">
    </div>
  );
}

export default App;

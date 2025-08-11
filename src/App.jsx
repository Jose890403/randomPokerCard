import { useState } from 'react'
import corazon from './assets/corazon.png'
import diamante from './assets/diamante.png'
import picas from './assets/picas.png'
import trebol from './assets/trebol.png'
import './App.css'

function App() {
  const [carta, setCarta] = useState({palos: corazon, numeros:"A"})

  const palos=[corazon, diamante, picas, trebol];
  const numeros=["A","J","Q","K", 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const generarCarta = () => {
    let palosAleatorios = palos[Math.floor(Math.random()* palos.length)];
    let numerosAleatorios = numeros[Math.floor(Math.random ()* numeros.length)];
    setCarta({palos: palosAleatorios, numeros: numerosAleatorios})
  }

  return (
    <>
    <div className='container'>
      <div className="card">
        <img src={carta.palos} alt='palos' className='derecha'/>
        <p className='num-grande'>{carta.numeros}</p>
        <img src={carta.palos} alt='palos' className='izquierda'/>
      </div>
      <button onClick={generarCarta}className='btn-generador'>Generar carta
        </button>
      
    </div>
    
    </>
    
  )
}

export default App

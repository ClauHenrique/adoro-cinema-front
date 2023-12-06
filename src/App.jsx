import { useState } from 'react'
import { Link } from 'react-router-dom'
// import './App.css'
import { cadastrar } from './services/cadastrar'


function App() {
  const [quant, setQant] = useState(0)
  const [peso, setPeso] = useState(0)
  const [nome, setNome] = useState("")
  const [exibResult, setExibResult] = useState(false)

  const calcularAgua = (peso) => {
    const quantRecom = peso * 35

    const quantlitros = (quantRecom / 1000).toFixed(2);

    setQant(quantlitros)
  }

  return (
    <>
      <div className='main'>
          <h1>Calculadora de Água Diaria</h1>

          <h3>digite o seu peso e veja a quantidade de agua que voce deve tomar por dia</h3>

          <form>
            <label htmlFor="name">Qual o seu nome: </label>
            <input
              type="text" 
              name="name" 
              id="name" 
              value={nome} 
              onChange={(e) => {
                setNome(e.target.value)
             }} />

            <label htmlFor="peso">Digite o seu peso: </label>
            <input 
              type="number" 
              name="peso" 
              id="peso" 
              min={0} 
              value={peso} 
              onChange={(e) => {
                setPeso(e.target.value)
              }} />

          </form>

        {
          exibResult ?
          <div>{nome}, voce deve tomar {quant} litros de agua por dia!</div>
          :
          null
        }

        <button onClick={() => {
          setExibResult(!exibResult)
          calcularAgua(peso)
          // cadastrar()
          }}>
          calcular
        </button>
            
        <Link to={"/registros"}>ver cadastros anteriores</Link>
      </div>
    </>
  )
}

export default App

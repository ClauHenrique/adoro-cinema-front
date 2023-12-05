import { useState } from 'react'
import { Link } from 'react-router-dom'
// import './App.css'
import { cadastrar } from './services/cadastrar'


function App() {
  const [count, setCount] = useState(0)
  const [exibRegistros, setExibRegistros] = useState(false)
  const [exibResult, setExibResult] = useState(false)

  return (
    <>
      <div className='main'>
          <h1>Calculadora de Água Diaria</h1>

          <h3>digite o seu peso e veja a quantidade de agua que voce deve tomar por dia</h3>

          <form>
            <label htmlFor="name">Qual o seu nome: </label>
            <input type="text" name="name" id="name" />

            <label htmlFor="peso">Digite o seu peso: </label>
            <input type="number" name="peso" id="peso" min={0} />

          </form>

        {
          exibResult ?
          <div>Resultado</div>
          :
          null
        }

        <button onClick={() => {
          setExibResult(!exibResult)
          cadastrar()
          }}>
          calcular
        </button>
            
        <Link to={"/registros"}>ver cadastros anteriores</Link>
      </div>
    </>
  )
}

export default App

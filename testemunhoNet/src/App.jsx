import './App.css'
import BarraNavegacao from './components/BarraNavegacao/jsx/BarraNavegacao'
import Rodape from './components/Rodape/jsx/Rodape'
import Home from './components/Home/jsx/Home'
function App() {

  return (
    <>
      <BarraNavegacao />
      <div className="container" id="conteudo">
        <Home />
      </div>
      <Rodape />
    </>
  )
}

export default App

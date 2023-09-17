import './App.css'
import BarraNavegacao from './components/BarraNavegacao'
import Rodape from './components/Rodape'
import Home from './components/Home'
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

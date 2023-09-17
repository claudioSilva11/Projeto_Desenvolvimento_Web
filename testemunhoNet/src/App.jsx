import './App.css'
import BarraNavegacao from './components/BarraNavegacaoErodape/jsx/BarraNavegacao'
import Rodape from './components/BarraNavegacaoErodape/jsx/Rodape'
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

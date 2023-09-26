import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from "react-router-dom";
import './App.css'
import "./components/utils/template.css";
import Template from "./components/Template";
import Home from "./components/Home/jsx/Home";
import Login from "./components/Login/Login";
import Cadastro from "./components/Cadastro/Cadastro";
import EditarPerfil from "./components/EditarPerfil/EditarPerfil";
import EscreverTestemunho from "./components/EscreverTestemunho/EscreverTestemunho";



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Template />}>
        <Route path="" element={<Home />} />
        <Route path="escrever-testemunho" element={<EscreverTestemunho/>} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/editar-perfil" element={<EditarPerfil />} />
    </>
  ));

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

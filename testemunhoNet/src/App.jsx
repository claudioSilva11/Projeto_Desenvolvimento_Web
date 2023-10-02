// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   createRoutesFromElements
// } from "react-router-dom";

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import './App.css'
import "./components/utils/template.css";

import Home from "./routes/Home/jsx/Home";

import Template from "./routes/Template";
import Login from "./routes/Login/jsx/Login";
import Cadastro from "./routes/Cadastro/jsx/Cadastro";
import EditarPerfil from "./routes/EditarPerfil/jsx/EditarPerfil";
import EscreverTestemunho from "./routes/EscreverTestemunho/jsx/EscreverTestemunho";
import Testemunho from "./routes/Testemunho/jsx/Testemunho";




// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route path="/" element={<Template />}>
//         <Route path="" element={<Home />} />
//         <Route path="escrever-testemunho" element={<EscreverTestemunho/>} />
//         <Route path="testemunho" element={<Testemunho/>} />
//       </Route>
//       <Route path="/login" element={<Login />} />
//       <Route path="/cadastro" element={<Cadastro />} />
//       <Route path="/editar-perfil" element={<EditarPerfil />} />
//     </>
//   ));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Template />,
    children: [
      {
        path: '/',
        element:<Home />
      },
      {
        path: 'testemunho',
        element:<Testemunho />
      },
      {
        path: 'editar-perfil',
        element: <EditarPerfil />
      },
      {
        path: 'escrever-testemunho',
        element: <EscreverTestemunho />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'cadastro',
        element: <Cadastro />
      }
    ]
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

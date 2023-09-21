import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from "react-router-dom";
import './App.css'
import Template from "./routes/Template";
import Home from "./routes/Home/jsx/Home";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Template/>}>
      <Route path="" element={<Home/>}/>
    </Route>
  )); 

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App

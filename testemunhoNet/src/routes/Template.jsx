import { Outlet } from "react-router-dom";
import BarraNavegacao from "../components/BarraNavegacao/jsx/BarraNavegacao";
import Rodape from "../components/Rodape/jsx/Rodape";

const Template = () =>{
    return (
        <>
            <BarraNavegacao/>
            <Outlet/>
            <Rodape/>
        </>
    )
}

export default Template;
import { Outlet } from "react-router-dom";
import BarraNavegacao from "./BarraNavegacao/jsx/BarraNavegacao";
import Rodape from "./Rodape/jsx/Rodape";

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
import { Outlet } from "react-router-dom";
import BarraNavegacao from "./BarraNavegacao/jsx/BarraNavegacao";
import Rodape from "./Rodape/jsx/Rodape";

const Template = () => {
    return (
        <>
            <BarraNavegacao />
            <div className="main-content-template">
                <Outlet />
            </div>
            <Rodape />
        </>
    )
}

export default Template;
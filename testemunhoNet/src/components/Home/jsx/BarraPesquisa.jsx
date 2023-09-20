import '../css/BarraPesquisa.css'
import { BsSearch } from "react-icons/bs"

export default function BarraPesquisa() {
    return (
        <>
            <form className="d-flex mt-3" role="search">
                <input type="search" placeholder="" aria-label="Search" id="inputSearch"/>
                <button id="btnlupinha" type="submit"><BsSearch /></button>
            </form>        
        </>
    )
}
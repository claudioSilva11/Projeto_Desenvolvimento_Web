import "../css/LinksPaginacao.css"
import { FaAngleLeft , FaAngleRight } from "react-icons/fa6";


export default function LinksPaginacao() {
    return (
        <>  
            
            <nav aria-label="Page navigation example" id="navPaginação" >
                <ul className="pagination">
                    <li className="page-item"><a className="page-link linkPaginacao" href="#" ><FaAngleLeft /></a></li>
                    <li className="page-item"><a className="page-link linkPaginacao" href="#">1</a></li>
                    <li className="page-item"><a className="page-link linkPaginacao" href="#">2</a></li>
                    <li className="page-item"><a className="page-link linkPaginacao" href="#">3</a></li>
                    <li className="page-item"><a className="page-link linkPaginacao" href="#"><FaAngleRight /></a></li>
                </ul>
            </nav>
            
        </>
    )
}
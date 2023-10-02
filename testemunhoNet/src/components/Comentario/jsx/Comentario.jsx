import '../css/Comentario.css';
import Perfil from "../../../components/utils/Perfil";
import { CiMenuKebab } from "react-icons/ci";


const Comentario = () => {
    return (
        <div className="comentario__container d-flex flex-row">
            <div className="comentario__perfil-container">
                <Perfil classe="comentario__perfil" />
            </div>
            <div className="comentario-info">
                <div className="comentario__autor d-flex flex-row align-items-center justify-content-between">
                    <p>João Souza</p>
                    <div className="dropdown">
                        <div className="" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <CiMenuKebab />
                        </div>
                        <ul className="dropdown-menu dropdown-comentario">
                            <li><a className="dropdown-item" href="#">Editar</a></li>
                            <li><a className="dropdown-item" href="#">Excluir</a></li>
                            <li><a className="dropdown-item" href="#">Denunciar</a></li>
                        </ul>
                    </div>

                </div>
                <div className="comentario__desc">
                    <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p className="comentario__data">04/01/2023</p>
                </div>
            </div>
        </div>
    );
}

export default Comentario;
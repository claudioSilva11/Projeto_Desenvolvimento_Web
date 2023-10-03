import '../css/Comentario.css';
import Perfil from "../../../components/utils/Perfil";
import { CiMenuKebab } from "react-icons/ci";


const Comentario = () => {
    return (
        <>
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
                                <li><a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#excluirModal">Excluir</a></li>
                                <li><a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#denunciarModal">Denunciar</a></li>
                            </ul>
                        </div>

                    </div>
                    <div className="comentario__desc">
                        <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p className="comentario__data">04/01/2023</p>
                    </div>
                </div>
            </div>

            {/* Modal Excluir */}
            <div className="modal fade" id="excluirModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Excluir Comentário</h1>
                        </div>
                        <div className="modal-body">
                            Você realmente deseja excluir este comentário?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Não</button>
                            <button type="button" className="btn btn-danger">Sim</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal denunciar */}
            <div className="modal fade" id="denunciarModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Denunciar comentário</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                            <div className="form-check">
                                <input class="radio" type="radio" id="sexualPornografico" name="denunciar" value="Material com conteúdo sexual e pornografia" />
                                <label for="sexualPornografico">Material com conteúdo sexual e pornografia</label><br />
                                <input class="radio" type="radio" id="assedioBullying" name="denunciar" value="Assédio ou bullying" />
                                <label for="assedioBullying">Assédio ou bullying</label><br />
                                <input class="radio" type="radio" id="odioViolencia" name="denunciar" value="Discurso de ódio ou violência explícita" />
                                <label for="odioViolencia">Discurso de ódio ou violência explícita</label><br />
                                <input class="radio" type="radio" id="desinformacao" name="denunciar" value="Desinformação" />
                                <label for="desinformacao">Desinformção</label><br />
                                <input class="radio" type="radio" id="outro" name="denunciar" value="Outro" />
                                <label for="outro">Outro</label><br />
                                <input class="radio" type="text" id="conteNos" name="conteNos"/><br/>
                                <button type="submit" class="btn" id="denunciar">Denunciar</button>    
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal editar comentario */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Comentario;
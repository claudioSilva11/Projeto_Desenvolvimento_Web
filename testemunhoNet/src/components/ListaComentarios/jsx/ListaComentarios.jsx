import '../css/ListaComentarios.css';
import Comentario from '../../Comentario/jsx/Comentario';
import Input from "../../../components/utils/Input";

function ListaComentarios() {
    return (
        <>
            <div className="comentario-testemunho__container">
                <div className="add-comentario d-flex flex-row align-items-center">
                    <Input filled placeHolder="Adicione um comentário..." />
                    <button type="button" className="btn btn-success">Comentar</button>
                    <button type="button" className="btn btn-danger">Cancelar</button>
                </div>
                <div>
                    <Comentario />
                    <Comentario />
                    
                </div>
            </div>
        </>
    )
}

export default ListaComentarios;
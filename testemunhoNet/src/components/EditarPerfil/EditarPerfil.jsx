import Form from "../utils/Form";
import "./editarPerfil.css";

const perfil = {
    nome: "marcos",
    sobrenome: "sousa",
    email: "marcos@gmail.com",
    senha: "1234",
    estado: "Ceará"
}


const EditarPerfil = () =>{
    return (
        <div className="d-flex flex-row justify-content-center align-items-center">
            <div className="editar-perfil__container">
                <Form perfil={perfil}/>
            </div>
        </div>
    );
}

export default EditarPerfil;
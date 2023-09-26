import Form from "../utils/Form";
import "./cadastro.css";


const Cadastro = () => {
    return (
        <div className="cadastro__container d-flex flex-row justify-content-center align-items-center">
            <div className="cadastro__content">
                <Form/>
            </div>
        </div>
    );
}

export default Cadastro;
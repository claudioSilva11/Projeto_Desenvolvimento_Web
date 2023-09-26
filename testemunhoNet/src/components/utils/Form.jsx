import Button from "./Button";
import "./form.css";
import Perfil from "./Perfil";

const Form = (Props) => {
    return (
        <div className="cadastro__form-container">
            <form>
                <div className="form-container__img d-flex flex-column align-items-center">
                    <Perfil />
                    <div className="form-container__perfil-btn">
                        <Button sm={true}>{Props.perfil ? "Editar Imagem" : "Escolher Imagem"}</Button>
                    </div>
                </div>
                <div className="form-container__entrada">
                    <div className="form-container__nome d-flex flex-row justify-content-between align-items-center">
                        <div>
                            <input type="text" className="form-control"
                                placeholder={Props.perfil ? Props.perfil.nome : "Nome"} aria-label="Nome" aria-describedby="basic-addon1" />
                        </div>
                        <div>
                            <input type="text" className="form-control"
                                placeholder={Props.perfil ? Props.perfil.sobrenome : "SobreNome"} aria-label="SobreNome" aria-describedby="basic-addon1" />
                        </div>
                    </div>

                    <div>
                        <input type="email" className="form-control" placeholder={Props.perfil ? Props.perfil.email : "Email"} aria-label="Email" aria-describedby="basic-addon1" />
                    </div>

                    <div>
                        {
                            !Props.perfil ? <input type="password" className="form-control" placeholder="Senha" aria-label="Senha" aria-describedby="basic-addon1" /> : null
                        }

                    </div>
                    <div>
                        <select className="form-select form-custom__select" aria-label="Estado">
                            <option selected>{Props.perfil ? Props.perfil.estado : "Estado"}</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div>
                        <Button>{Props.perfil ? "Editar" : "Cadastrar"}</Button>
                    </div>
                    {
                        Props.perfil ? <div className="d-flex flex-row justify-content-center align-items-center"><a className="editar-perfil__link">Redefinir Senha</a></div> : null
                    }
                </div>
            </form>
        </div>
    );
}

export default Form;
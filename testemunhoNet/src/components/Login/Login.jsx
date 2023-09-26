import { Link } from "react-router-dom";
import Button from "../utils/Button";
import Logo from "../utils/Logo";
import "./login.css";


const Login = () => {

    return (
        <div className="form__login-content">
            <div className="form-container__login">
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <Logo/>
                </div>
                <form className="form__login-item">
                    <div className="input-group mb-3">
                        <input type="email"
                            className="form-control"
                            placeholder="Email"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2" 
                            required/>
                    </div>
                    <div className="input-group mb-3">
                        <input type="password"
                            className="form-control"
                            placeholder="Senha"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2" 
                            required/>
                    </div>
                    <div className="form__login-cadastro d-flex justify-content-center">
                        <p>Não tem cadastro? <Link className="login-cadastro__link" to={"../cadastro"}>Cadastre-se</Link></p>
                    </div>
                    <div className="form__logim-btn" >
                        <Button>Login</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
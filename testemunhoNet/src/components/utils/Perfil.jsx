import "./perfil.css";
import trump from "../../../public/imgs/trump.png";

const Perfil = () => {
    return (
        <div>
            <div className="perfil-img__container">
                <img className="perfil__img" src={trump} />
            </div>
        </div>
    );
}

export default Perfil;
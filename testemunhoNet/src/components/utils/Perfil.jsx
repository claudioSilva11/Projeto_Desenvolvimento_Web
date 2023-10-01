import "./perfil.css";
import trump from "../../../public/imgs/trump.png";

const Perfil = (Props) => {
    return (
        <div>
            <div className={`perfil-img__container ${Props.classe}`}>
                <img className="perfil__img" src={trump} />
            </div>
        </div>
    );
}

export default Perfil;
import logoUrl from "../../../public/imgs/logo.png";
import "./logo.css";

const Logo = () => {
    return (
        <div className="logo-container">
            <img src={logoUrl} alt="logo" className="logo-container__img" />
        </div>
    )
}

export default Logo;
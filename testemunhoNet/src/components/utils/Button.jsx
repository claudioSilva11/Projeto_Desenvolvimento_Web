import "./button.css";

const Button = (Props) =>{
    return (
        <button type="button" 
            className={`btn btn-primary  btn-custom  ${Props.sm? "btn-sm ": "btn-md "} ${Props.classe}`}
            onClick={Props.onPress ? Props.onPress: null}>{Props.children}</button>
    );
}

export default Button;
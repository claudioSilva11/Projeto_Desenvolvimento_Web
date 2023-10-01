import "./input.css";

const Input = (Props) =>{
    console.log(Props.filled)
    return(
        <input type={`${Props.tipo ? Props.tipo: "text"}`} 
            className={`form-control ${Props.filled ? "filled": ""}`} 
            placeholder={Props.placeHolder ? Props.placeHolder: ""} 
            aria-label="Username" 
            aria-describedby="basic-addon1"/>
    );
}

export default Input;
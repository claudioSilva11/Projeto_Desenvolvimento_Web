import Button from "../../../components/utils/Button";
import "../css/escreverTestemunho.css";

const EscreverTestemunho = () => {
    return (
        <div className="escrever-container">
            <div className="escrever-container__conteudo">
                <form>
                    <div className="escrever-container__item escrever-container__entrada escrever-container__entrada-titulo">
                        <p>Escolha um título:</p>
                        <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1"></input>
                    </div>
                    <div className="escrever-container__item escrever-container__entrada escrever-container__entrada-conteudo">
                        <p>Escreva o seu testemunho:</p>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="escrever-container__item escrever-container__publicacao">
                        <p>Comentários na publicação:</p>
                        <div className="publicacao__container">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label" >
                                    Ativado
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                <label className="form-check-label">
                                    Desativado
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="escrever-container__item escrever-container__button">
                        <Button classe="publicacao__button">Publicar</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EscreverTestemunho;
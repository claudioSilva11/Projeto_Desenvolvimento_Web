import Button from "../../../components/utils/Button";
import "../css/escreverTestemunho.css";

const EscreverTestemunho = () => {
    return (
        <>
            <div id="formulario">
                <form action="#" method="get">
                    <label for="titulo">Escolha um titulo:</label><br /><br />
                    <input type="titulo" id="titulo" name="titulo" /><br /><br />
                    <label for="testemunho">Escreva o seu testemunho:</label><br /><br />
                    <textarea id="testemunho" name="testemunho"> </textarea><br /><br />
                    <label for="comentarios">Comentários na publicação:</label><br /><br />
                    <input type="radio" id="ativado" name="comentarios" value="ativado" />
                    <label id="ativado"> Ativado </label>
                    <input type="radio" id="desativado" name="comentarios" value="desativado" />
                    <label id="desativado">Desativado </label> <br /><br/>
                    <input type="submit" value="Publicar" id="enviar" className="btn" />
                </form>
            </div>
        </>
    );
}

export default EscreverTestemunho;
import './Rodape.css'

export default function Rodape() {
    return (
        <>
            <footer id="rodape">
                <div id="conteudo-footer">
                    <h4>Testemunho.Net</h4>
                    <div id="grupo-icones-footer">
                        <a href="#" target="_blank"><i className="fab fa-github icone-footer "></i></a>
                        <a href="mailto:email@gmail.com"><i className="fas fa-envelope icone-footer"></i></a>
                        <a href="#"><i className="fas fa-qrcode icone-footer "></i></a>
                    </div>
                    <p id="copyright">Copyright  &copy;2023 Testemunho.Net.</p>
                </div>
            </footer>
        </>
    );
}
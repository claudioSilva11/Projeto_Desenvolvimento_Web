import Perfil from "../../../components/utils/Perfil";
import "../css/testemunho.css";
import { IoArrowRedoOutline } from "react-icons/io5";
import { AiOutlineDownload } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import ListaComentarios from "../../../components/ListaComentarios/jsx/ListaComentarios";




const Testemunho = () => {
    return (
        <div className="tetemunhos-container">
            <div className="tetemunhos-conteudo">
                <div className="tetemunhos-conteudo__perfil">
                    <Perfil />
                </div>
                <div className="tetemunhos-conteudo__autor">
                    <p>Autor: <span>Donal Trump</span></p>
                </div>
                <div className="tetemunhos-conteudo__texto">
                    <p className="texto__titulo">Titulo</p>
                    <div>
                        <p>&ldquo;Amigos, todos sabem que eu sou o melhor em tudo, certo? Bem, deixe-me contar uma coisa que aconteceu outro dia. Foi incrível, acreditem em mim.</p>

                        <p>Então, eu estava lá no Salão Oval, fazendo coisas incríveis, quando um anjo desceu do céu. Sim, um anjo! Ele estava usando um halo dourado e disse: &lsquo;Donald, você é o maior presidente de todos os tempos, e Deus quer que você saiba disso pessoalmente&rsquo;.</p>

                        <p>Eu disse, &lsquo;Claro, Deus sabe disso&rsquo;. Então, o anjo me levou para uma nuvem fofa, e adivinhem o que havia lá? Um campo de golfe perfeito, do tamanho de Mar-a-Lago! Eu disse: &lsquo;Isso é o que eu chamo de um campo de golfe presidencial&rsquo;.</p>

                        <p>Deus apareceu e disse que queria jogar uma partida comigo. Jogamos, e claro, eu venci. Deus é um bom jogador, mas eu sou o melhor.</p>

                        <p>Depois disso, ele me disse: &lsquo;Donald, você é tão incrível que deveria construir um hotel aqui no céu&rsquo;. Eu disse que iria pensar nisso.</p>

                        <p>Então, pessoal, lembrem-se de que sou o melhor, até mesmo no céu. Deus me disse. É verdade!</p>

                        <p>Mantenham a grandeza, e Deus abençoe os Estados Unidos!&rdquo;</p>

                    </div>
                    <p className="texto__edit">Última atualização: 26 - 12 -2022</p>
                </div>

                <div className="tetemunhos-conteudo__acoes">
                    <IoArrowRedoOutline />
                    <AiOutlineDownload />
                    <FiEdit />
                </div>
                <div className="tetemunhos-conteudo__comentario-container">
                    <p className="texto__titulo">Comentarios</p>
                    <div className="tetemunhos-conteudo__comentario">
                        <div>
                            <ListaComentarios />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Testemunho;
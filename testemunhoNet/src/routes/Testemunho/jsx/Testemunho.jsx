import Perfil from "../../../components/utils/Perfil";
import "../css/testemunho.css";
import { IoArrowRedoOutline } from "react-icons/io5";
import { AiOutlineDownload } from "react-icons/ai";
import { CiMenuKebab } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";
import Input from "../../../components/utils/Input";


const Comentario = () => {
    return (
        <div className="comentario__container d-flex flex-row">
            <div className="comentario__perfil-container">
                <Perfil classe="comentario__perfil" />
            </div>
            <div className="comentario-info">
                <div className="comentario__autor d-flex flex-row align-items-center justify-content-between">
                    <p>João Souza</p>
                    <div className="dropdown">
                        <div className="" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <CiMenuKebab />
                        </div>
                        <ul className="dropdown-menu dropdown-comentario">
                            <li><a className="dropdown-item" href="#">Editar</a></li>
                            <li><a className="dropdown-item" href="#">Excluir</a></li>
                            <li><a className="dropdown-item" href="#">Denunciar</a></li>
                        </ul>
                    </div>

                </div>
                <div className="comentario__desc">
                    <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p className="comentario__data">04/01/2023</p>
                </div>
            </div>
        </div>
    );
}


const ComentarioTestemunho = () => {
    return (
        <div className="comentario-testemunho__container">
            <div className="add-comentario d-flex flex-row align-items-center">
                <Input filled placeHolder="Adicione um comentário..." />
                <button type="button" className="btn btn-success">Comentar</button>
                <button type="button" className="btn btn-danger">Cancelar</button>
            </div>
            <div>
                <Comentario />
                <Comentario />
                <Comentario />
                <Comentario />
                <Comentario />
                <Comentario />
            </div>
        </div>
    );
}


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
                            <ComentarioTestemunho />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Testemunho;
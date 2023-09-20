import '../css/AmostraTestemunho.css'

export default function AmostraTestemunho(){
    return (
        <>
            <div id="divAmostraTestemunho">
                <article>
                    <header>
                        <h1 id="tituloAmostraTestemunho">Titulo</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem earum repellat ex tempore asperiores placeat perferendis dolores ipsa, laborum distinctio dolorem, voluptatibus natus. Modi, suscipit eius architecto itaque fuga nisi! Lorem ipsum dolor sit amet consectetur, adipisicing elit...</p>
                    </header>
                    <footer>
                        <address>
                            <em><a href="#" className="link-perfil-usuario">Autor</a></em> - <time >2022/06/15 13:00</time>
                        </address>
                        <a href="#" id="linkTestemunhoCompleto">Leia o testemunho completo</a>
                    </footer>
                </article>
            </div>
        </>
    )
}
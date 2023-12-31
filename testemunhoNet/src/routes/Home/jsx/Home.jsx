import '../css/Home.css'
import Carrosselimagens from '../../../components/Carrosselimagens/jsx/Carrosselimagens'
import BarraPesquisa from '../../../components/BarraPesquisa/jsx/BarraPesquisa';
import AmostraTestemunho from '../../../components/AmostraTestemunho/jsx/AmostraTestemunho';
import LinksPaginacao from '../../../components/LinksPaginacao/jsx/LinksPaginacao';

export default function Home() {
    return (
        <>
            <div className="container" id="conteudo">
                <article>
                    <Carrosselimagens />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, voluptatum facere voluptatem quae iste sed molestiae odit ullam maxime pariatur dolorem labore iusto harum unde. Maxime labore odit aliquid culpa. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa aliquid doloribus voluptatem eaque expedita, corrupti, consequatur quo quisquam aperiam velit fugiat libero? Est ut dignissimos nesciunt facere numquam, et odit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis necessitatibus amet nostrum id dolorem repudiandae facilis optio dolores tenetur repellendus voluptates at veritatis nihil, nemo sequi voluptatem quae corporis corrupti. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos natus eligendi blanditiis inventore minima voluptas neque quibusdam excepturi minus ullam! Quos iure numquam at. Optio quos accusamus impedit quidem voluptates!</p>            
                </article>
                <section>
                    <h3 id="tituloSecaoPesquisa">Encontre aqui diversos testemunhos de diferentes pessoas</h3>
                    <div id="divBarraPesquisa">
                        <BarraPesquisa />
                    </div>
                </section>
                <section>
                    <h3 id="tituloTestemunhos">Testemunhos</h3>
                    <AmostraTestemunho />
                    <AmostraTestemunho />
                    <AmostraTestemunho />
                    
                    <LinksPaginacao />
                </section>
            </div>
        </>
    );
}
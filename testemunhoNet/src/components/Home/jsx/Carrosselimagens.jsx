import '../css/Carrosselimagens.css'

export default function Carrosselimagens() {

    return (
        <>
            <figure id="imagensCarrossel">
                <div id="carrossel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://cdn.pixabay.com/photo/2020/01/20/05/37/jesus-4779548_1280.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://cdn.pixabay.com/photo/2022/04/09/16/32/god-7121809_1280.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://cdn.pixabay.com/photo/2020/01/20/05/32/jesus-4779543_1280.jpg" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carrossel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carrossel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <figcaption>Criador das imagens: <a href="https://pixabay.com/pt/users/jeffjacobs1990-7438739/">Jeff Jacobs</a></figcaption>
            </figure>
        </>
    )
}
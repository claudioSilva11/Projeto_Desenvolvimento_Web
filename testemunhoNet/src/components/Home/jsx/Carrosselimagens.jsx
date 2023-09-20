import '../css/Carrosselimagens.css'

export default function Carrosselimagens() {

    return (
        <>
            <figure id="imagensCarrossel">
                <div id="carrossel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://cdn.pixabay.com/photo/2021/11/01/18/10/jesus-6761272_1280.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://cdn.pixabay.com/photo/2023/01/10/04/59/god-7708931_1280.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://cdn.pixabay.com/photo/2021/04/19/04/05/god-6190184_1280.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://cdn.pixabay.com/photo/2022/03/23/03/18/jesus-7086354_1280.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://cdn.pixabay.com/photo/2021/04/26/20/40/jesus-6209955_1280.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://cdn.pixabay.com/photo/2022/03/06/05/13/god-7050860_1280.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://cdn.pixabay.com/photo/2022/03/30/17/13/god-7101560_1280.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://cdn.pixabay.com/photo/2020/01/20/05/37/jesus-4779548_1280.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://cdn.pixabay.com/photo/2020/01/20/05/37/jesus-4779549_1280.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://cdn.pixabay.com/photo/2020/01/20/05/32/jesus-4779543_1280.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://cdn.pixabay.com/photo/2021/08/20/04/05/god-6559435_1280.jpg" className="d-block w-100" alt="..." />
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
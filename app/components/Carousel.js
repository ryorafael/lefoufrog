const Carousel = () => {
    return (
        <div className="carousel rounded-box">
            <div className="carousel-item">
                <img src="/escargot2.png" alt="Escargots" />
            </div>
            <div className="carousel-item w-96">
                <img src="/foieGras.jpg" alt="Foie Gras" />
            </div>
            <div className="carousel-item">
                <img src="/steakaupoivrenew.webp" alt="Steak Au Poivre" />
            </div>
            <div className="carousel-item">
                <img src="/profiteroles1.png" alt="Profiteroles" />
            </div>
            <div className="carousel-item w-96">
                <img src="/fish.jpeg" alt="Burger" />
            </div>
        </div>
    );
}

export default Carousel;
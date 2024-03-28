import Image from "next/image";
const Carousel = () => {
  return (
    <div className="carousel rounded-box mt-10 mb-10">
      <div className="carousel-item">
        <Image src="/escargot2.png" alt="Escargots" />
      </div>
      <div className="carousel-item w-96">
        <Image src="/foieGras.jpg" alt="Foie Gras" />
      </div>
      <div className="carousel-item">
        <Image src="/steakaupoivrenew.webp" alt="Steak Au Poivre" />
      </div>
      <div className="carousel-item">
        <Image src="/profiteroles1.png" alt="Profiteroles" />
      </div>
      <div className="carousel-item w-96">
        <Image src="/fish.jpeg" alt="Burger" />
      </div>
    </div>
  );
};

export default Carousel;

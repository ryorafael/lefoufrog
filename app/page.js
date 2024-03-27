import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Intro />
      <Carousel />
      <Footer />
    </>
  );
}
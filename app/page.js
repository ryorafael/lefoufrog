import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Intro />
      <Carousel />
    </>
  );
}
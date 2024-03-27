import photo from "./header2.png";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <Image src={photo} alt="inside of the restaurant" />
    </header>
  );
};

export default Header;

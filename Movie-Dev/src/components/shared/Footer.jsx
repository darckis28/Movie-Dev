import Logo from "../../assets/img/cuevana.png";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
function Footer() {
  return (
    <footer className="text-white pb-28 ">
      <header className="flex flex-col md:flex-row w-4/5 mx-auto justify-between items-center my-5">
        <div className="flex items-center gap-5">
          <img src={Logo} className=" w-32 dr:w-80" alt="logo" />
          <p className="font-light text-sm dr:text-base">
            Terminos y Condiciones
          </p>
        </div>
        <nav className="flex gap-16">
          <a href="#">
            <FaFacebookF className="text-3xl" />
          </a>
          <a href="#">
            <IoLogoInstagram className="text-3xl" />
          </a>
        </nav>
      </header>
      <footer>
        <p className="text-center text-gray-600 text-sm">
          ©2024 Dev Movie Peliculas Online, Todos los derechos reservados.
        </p>
      </footer>
    </footer>
  );
}

export default Footer;

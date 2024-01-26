import "./Header.css";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import List_Link from "../List/List_Link";
import Logo from "../../assets/img/cuevana.png";
import { useState } from "react";
import { Link } from "react-router-dom";
function Header() {
  const [interruptor, setInterruptor] = useState(false);
  function active() {
    setInterruptor(!interruptor);
  }
  return (
    <header className={`header ${interruptor && "active"}`}>
      <div className="nav">
        <div className="flex items-center justify-between w-full px-5 lg:w-4/6 z-20  ">
          <Link to={"/"}>
            <img className=" w-52  sm:w-60" src={Logo} alt="" />
          </Link>
          <button className="btn--click " onClick={active}>
            {interruptor ? <MdOutlineClose /> : <GiHamburgerMenu />}
          </button>
        </div>
        <nav className="navigator--containner">
          <ul className="containner--nav">
            <li className="containner--link">
              <Link to={"/"} className="link">
                Inicio
              </Link>
            </li>
            <li className="containner--link">
              <Link to="/peliculas" className="link">
                Películas <IoIosArrowDown />
              </Link>
              <List_Link
                category={[
                  "Popular",
                  "Estrenos",
                  "Peliculas Top",
                  "Peliculas en cartelera",
                ]}
              />
            </li>
            <li className="containner--link">
              <a className="link">
                Generos <IoIosArrowDown />
              </a>
              <List_Link
                category={[
                  "Accion",
                  "Animacion",
                  "Crimen",
                  "Familia",
                  "Misterio",
                  "Suspenso",
                  "Aventura",
                  "Ciencia Ficcion",
                  "Drama",
                  "Comedia",
                  "Romance",
                  "Horror",
                  "Historia",
                  "Musica",
                  "Documentales",
                  "Fantasia",
                  "Peliculas de TV",
                  "Guerra",
                  "Occidental",
                ]}
              />
            </li>
            <li className="containner--link">
              <Link to={"Series"} className="link">
                Series <IoIosArrowDown />
              </Link>
              <List_Link
                category={[
                  "Series Top",
                  "Al Aire",
                  "Tendencias Semanales",
                  "Tendencias diarias",
                ]}
              />
            </li>
          </ul>
          <div className="relative   w-full lg:w-auto ">
            <IoSearchSharp className="absolute text-yellow-400 top-1/2 -translate-y-1/2 right-3 " />
            <input placeholder="Buscador..." className="input" type="text" />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;

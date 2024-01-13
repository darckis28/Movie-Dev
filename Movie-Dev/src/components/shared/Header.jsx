import "./Header.css";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import List_Link from "../List/List_Link";
import Logo from "../../img/cuevana.png";
function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <a href="">
          <img className="w-60" src={Logo} alt="" />
        </a>
        <ul className="containner--nav">
          <li className="containner--link">
            <a href="" className="link">
              Inicio
            </a>
          </li>
          <li className="containner--link">
            <a href=" " className="link">
              Películas <IoIosArrowDown />
            </a>
            <List_Link
              category={[
                "Ultimas Peliculas",
                "Estrenos",
                "Tendencias Semanales",
                "Tendencias diarias",
              ]}
            />
          </li>
          <li className="containner--link">
            <a href=" " className="link">
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
              ]}
            />
          </li>
          <li className="containner--link">
            <a href="" className="link">
              Series <IoIosArrowDown />
            </a>
            <List_Link
              category={[
                "Series",
                "Episodios",
                "Estrenos",
                "Tendencias Semanales",
                "Tendencias diarias",
              ]}
            />
          </li>
        </ul>
      </nav>
      <div className="relative">
        <IoSearchSharp className="absolute text-yellow-400 top-1/2 -translate-y-1/2 right-3 " />
        <input placeholder="Buscador..." className="input" type="text" />
      </div>
    </header>
  );
}

export default Header;

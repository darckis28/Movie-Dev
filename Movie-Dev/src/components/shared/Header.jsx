import "./Header.css";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import List_Link from "../List/List_Link";
import Logo from "../../assets/img/portadaMovieDEv.png";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
function Header() {
  const [interruptor, setInterruptor] = useState(false);
  const [input, setIput] = useState("");
  const navigate = useNavigate();
  function active() {
    setInterruptor(!interruptor);
  }
  function desactive() {
    setInterruptor(false);
  }
  const handleChange = (event) => {
    setIput(event.target.value);
  };
  function search(e) {
    e.preventDefault();
    navigate(`/search/${input}`);
    setIput("");
    desactive();
  }
  return (
    <header className={`header ${interruptor && "active"}`}>
      <div className="nav">
        <div className="flex items-center justify-between w-full px-5 lg:w-4/6 z-20  ">
          <Link onClick={desactive} to={"/"}>
            <img className=" w-52  sm:w-60" src={Logo} alt="" />
          </Link>
          <button className="btn--click " onClick={active}>
            {interruptor ? <MdOutlineClose /> : <GiHamburgerMenu />}
          </button>
        </div>
        <nav className="navigator--containner">
          <ul className="containner--nav">
            <li className="containner--link">
              <Link onClick={desactive} to={"/"} className="link">
                Inicio
              </Link>
            </li>
            <li className="containner--link">
              <Link onClick={desactive} to="/peliculas" className="link">
                Películas <IoIosArrowDown />
              </Link>
              <List_Link
                active={desactive}
                category={[
                  "Popular",
                  "Estrenos",
                  "Peliculas Top",
                  "Peliculas en cartelera",
                ]}
              />
            </li>
            <li className="containner--link">
              <a onClick={desactive} className="link">
                Generos <IoIosArrowDown />
              </a>
              <List_Link
                active={desactive}
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
              <Link onClick={desactive} to={"Series"} className="link">
                Series <IoIosArrowDown />
              </Link>
              <List_Link
                active={desactive}
                category={[
                  "Series Top",
                  "Al Aire",
                  "Tendencias Semanales",
                  "Tendencias diarias",
                ]}
              />
            </li>
          </ul>
          <form onSubmit={search} className="relative   w-full lg:w-auto ">
            <IoSearchSharp className="absolute text-yellow-400 top-1/2 -translate-y-1/2 right-3 " />
            <input
              onChange={handleChange}
              placeholder="Buscador..."
              className="input"
              type="text"
              value={input}
            />
          </form>
        </nav>
      </div>
    </header>
  );
}

export default Header;

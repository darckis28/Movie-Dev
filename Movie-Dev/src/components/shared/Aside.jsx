import { useEffect, useState } from "react";
import "./Aside.css";
import Title from "./Title";
import CardX from "../Cards/CardX";
import getData from "../../data/data";

function Aside() {
  const [active, setActive] = useState(true);
  const [estrenos, setEstrenos] = useState([]);
  const [proximos, setProximos] = useState([]);
  useEffect(() => {
    getData(`movie/top_rated`)
      .then(({ results }) => setProximos(results.slice(0, 6)))
      .catch((err) => console.log(err));
    getData("movie/upcoming")
      .then(({ results }) => setEstrenos(results.slice(0, 6)))
      .catch((err) => console.log(err));
  }, []);
  const handelClick = (e) => {
    const btns = document.querySelectorAll(".btn--aside");
    btns.forEach((x) => x.classList.remove("active"));
    e.target.classList.add("active");
    if (e.target.innerText === "Top") setActive(true);
    else setActive(false);
  };

  return (
    <aside className="col-span-1 text-white">
      <Title size={"xl"}>Peliculas Destacadas</Title>
      <div className="flex flex-1 w-full">
        <button onClick={handelClick} className="btn--aside active">
          Top
        </button>
        <button onClick={handelClick} className="btn--aside ">
          Estrenos
        </button>
      </div>
      {active && (
        <section className=" w-full mt-5 flex justify-center md:justify-start">
          <ul className=" flex flex-col gap-2  ">
            {proximos.map((data) => (
              <CardX
                key={data.id}
                name={data.title}
                img={data.poster_path}
                fecha={data.release_date}
                points={data.vote_average}
                id={data.id}
              />
            ))}
          </ul>
        </section>
      )}
      {!active && (
        <section className="w-full mt-5 flex justify-center md:justify-start">
          <ul className=" flex flex-col gap-2">
            {estrenos.map((data) => (
              <CardX
                key={data.id}
                name={data.title}
                img={data.poster_path}
                fecha={data.release_date}
                points={data.vote_average}
                id={data.id}
              />
            ))}
          </ul>
        </section>
      )}
    </aside>
  );
}

export default Aside;

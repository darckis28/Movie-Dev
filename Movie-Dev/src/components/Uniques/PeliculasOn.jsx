import { useState } from "react";
import CardPeliculas from "../Cards/CardPeliculas";
import Title from "../shared/Title";
import "./PeliculasOn.css";
import UltimasP from "../List/UltimasP";
function PeliculasOn() {
  const [state, setState] = useState("Ultimas");
  const handelClick = (e) => {
    const btns = document.querySelectorAll(".btn--peliculasOn");
    btns.forEach((x) => x.classList.remove("active"));
    e.target.classList.add("active");
    if (e.target.innerText === "Ultimas") setState("Ultimas");
    else if (e.target.innerText === "Tendencias") setState("Tendencias");
    else setState("Estrenos");
  };
  return (
    <section className="my-5">
      <div className="flex gap-5 items-center flex-col sm:flex-row ">
        <Title color="white" size={"3xl"}>
          Peliculas Online
        </Title>
        <nav className="flex gap-5">
          <button onClick={handelClick} className="btn--peliculasOn active">
            Ultimas
          </button>
          <button onClick={handelClick} className="btn--peliculasOn ">
            Tendencias
          </button>
          <button onClick={handelClick} className="btn--peliculasOn ">
            Estrenos
          </button>
        </nav>
      </div>
      <article className="w-full mt-9">
        {state === "Ultimas" && <UltimasP params={"movie/now_playing?"} />}
        {state === "Tendencias" && <UltimasP params={"movie/popular?"} />}
        {state === "Estrenos" && <UltimasP params={"movie/upcoming?"} />}
      </article>
    </section>
  );
}

export default PeliculasOn;

import CardPeliculas from "../Cards/CardPeliculas";
import Title from "../shared/Title";
import "./PeliculasOn.css";
function PeliculasOn() {
  return (
    <section className="my-5">
      <div className="flex gap-5 items-center">
        <Title color="white" size={"3xl"}>
          Peliculas Online
        </Title>
        <button className="btn--peliculasOn active">Ultimas</button>
        <button className="btn--peliculasOn ">Tendencias</button>
        <button className="btn--peliculasOn ">Estrenos</button>
      </div>
      <article className="w-full">
        <ul>
          <li>
            {" "}
            <CardPeliculas />{" "}
          </li>
        </ul>
      </article>
    </section>
  );
}

export default PeliculasOn;

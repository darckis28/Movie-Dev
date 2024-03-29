import { useParams } from "react-router-dom";
import getData from "../data/data";
import { useEffect, useState } from "react";
import { getPoster } from "../utilities/convertes.js";
import Title from "../components/shared/Title.jsx";
import DatePelicula from "../components/Date/DatePelicula.jsx";
import Video from "../components/videos/Video.jsx";
import Generos from "../components/Genero/Generos.jsx";
import ContainnerRes from "../components/Containners/ContainnerRes.jsx";
import CotainnerSec from "../components/Containners/CotainnerSec.jsx";
import Companias from "../components/Genero/Companias.jsx";
import Aside from "../components/shared/Aside.jsx";
import Similar from "../components/Uniques/Similar.jsx";
import RecomendacionMov from "../components/Uniques/RecomendacionMov.jsx";

function MovieId() {
  const { movieID } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    getData(`movie/${movieID}?`).then((data) => setMovie(data));
  }, [movieID]);
  document.title = movie.title;
  return (
    <section className="relative min-h-screen w-full ">
      <div
        style={{ backgroundImage: `url("${getPoster(movie.backdrop_path)}")` }}
        className="w-full h-screen bg-cover bg-center -z-10 absolute top-0 left-0"
      ></div>
      <main className=" z-10 w-full bg-gradient-to-t to-initial via-secund from-gray-950 pt-44 ">
        <main>
          <article className="flex  gap-10 flex-col md:mx-28 md:flex-row">
            <figure className="mx-auto w-4/5 md:w-48">
              <img
                src={getPoster(movie.poster_path)}
                alt=""
                className="w-full rounded-lg"
              />
            </figure>
            <section className="px-5 md:px-0 md:w-3/4">
              <Title color="white" position="left" size={"3xl"} etiqueta={true}>
                {movie.title}
              </Title>
              <span className="text-gray-400 font-extralight text-lg">
                {movie.original_title}
              </span>
              <div>
                <DatePelicula
                  id={movie.id}
                  points={movie.vote_average}
                  date={movie.release_date}
                />
              </div>
              <p className="text-gray-400 font-light text-sm ">
                {movie.overview}
              </p>
              <Generos listGen={movie.genres} />
              <Companias listCompanys={movie.production_companies} />
            </section>
          </article>
          <Video id={movie.id} />
        </main>
        <ContainnerRes>
          <CotainnerSec>
            <Similar id={movie.id} titleMovie={movie.title} />
            <RecomendacionMov id={movie.id} />
          </CotainnerSec>
          <Aside />
        </ContainnerRes>
      </main>
      {/* <img src={getPoster(movie.backdrop_path)} alt="" /> */}
    </section>
  );
}

export default MovieId;

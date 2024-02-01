import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import getData from "../data/data";
import { getPoster } from "../utilities/convertes";
import Title from "../components/shared/Title";
import Generos from "../components/Genero/Generos";
import Companias from "../components/Genero/Companias";
import Temporadas from "../components/Uniques/Temporadas";

function SerieId() {
  const { serieID } = useParams();
  const [serie, setSerie] = useState({});
  useEffect(() => {
    getData(`tv/${serieID}?`).then((data) => setSerie(data));
  }, [serieID]);
  document.title = serie.name;
  return (
    <section className="relative min-h-screen w-full">
      <div
        style={{ backgroundImage: `url("${getPoster(serie.backdrop_path)}")` }}
        className="w-full h-screen bg-cover bg-center -z-10 absolute top-0 left-0"
      ></div>
      <main className="">
        <main className="z-10 w-full bg-gradient-to-t to-initial via-secund from-gray-950 pt-44 min-h-screen">
          <article className="flex  gap-10 flex-col md:mx-28 md:flex-row">
            <figure className="mx-auto w-4/5 md:w-48">
              <img
                src={getPoster(serie.poster_path)}
                alt=""
                className="w-full rounded-lg"
              />
            </figure>
            <section className="px-5 md:px-0 md:w-3/4">
              <Title color="white" position="left" size={"3xl"} etiqueta={true}>
                {serie.name}
              </Title>
              <span className="text-gray-400 font-extralight text-lg">
                {serie.original_title}
              </span>
              <p className="text-gray-400 font-light text-sm ">
                {serie.overview}
              </p>
              <Generos listGen={serie.genres} />
              <Companias listCompanys={serie.production_companies} />
              <div className="my-2">
                {serie.in_production ? (
                  <p className="bg-green-400 p-1 w-min rounded text-white font-extralight animate-pulse">
                    Emision
                  </p>
                ) : (
                  <p className="bg-red-400 p-1 w-min rounded text-white font-extralight">
                    Finalizado
                  </p>
                )}
              </div>
            </section>
          </article>
          <Temporadas seasons={serie.seasons} />
        </main>
      </main>
    </section>
  );
}

export default SerieId;

import { useEffect, useState } from "react";
import getData from "../../data/data";
import CardPeliculas from "../Cards/CardPeliculas";
import Lading from "../Load/Lading";

function UltimasP({ params }) {
  const [list, setList] = useState([]);
  useEffect(() => {
    getData(params).then(({ results }) => setList(results));
  }, [params]);
  return (
    <ul className="w-full flex flex-wrap gap-5 justify-center">
      {list.length > 0 ? (
        list.map((movie) => (
          <CardPeliculas
            key={movie.id}
            title={movie.title}
            date={movie.release_date}
            img={movie.poster_path}
          />
        ))
      ) : (
        <Lading />
      )}
    </ul>
  );
}

export default UltimasP;

import { useEffect, useState } from "react";
import getData from "../../data/data";
import CardPeliculas from "../Cards/CardPeliculas";
import Lading from "../Load/Lading";

function UltimasP({ params, query }) {
  const [list, setList] = useState([]);
  useEffect(() => {
    setList([]);
    getData(params, query).then(({ results }) => setList(results));
  }, [params, query]);
  console.log(list);
  return (
    <ul className="w-full flex flex-wrap gap-5 justify-center">
      {list.length > 0 ? (
        list.map((movie) => (
          <CardPeliculas
            key={movie.id}
            title={movie.title || movie.name}
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

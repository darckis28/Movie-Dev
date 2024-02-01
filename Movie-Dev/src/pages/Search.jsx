import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getData from "../data/data";
import CardPeliculas from "../components/Cards/CardPeliculas";

function Search() {
  const { searchpick } = useParams();
  const [search, setSearch] = useState([]);
  useEffect(() => {
    getData("search/movie?", `query=${searchpick}&`)
      .then((data) => setSearch(data.results))
      .catch((err) => console.log(err));
  }, [searchpick]);
  console.log(search);
  return (
    <div className=" pt-32 px-4 min-h-[100vh - 272px]">
      {search.length > 1 ? (
        <ul className="flex flex-wrap gap-5 w-full h-full">
          {search.map((pelis) => (
            <li key={pelis.id}>
              {" "}
              <CardPeliculas
                key={pelis.id}
                title={pelis.title || pelis.name}
                date={pelis.release_date}
                img={pelis.poster_path}
                id={pelis.id}
                tipo={"movie"}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex w-full justify-center h-[calc(100vh-400px)] items-center">
          <h1 className="text-gray-700 text-5xl">No hay resultados</h1>
        </div>
      )}
    </div>
  );
}

export default Search;

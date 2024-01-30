import { useEffect, useState } from "react";
import getData from "../../data/data";
import CardPeliculas from "../Cards/CardPeliculas";
import Title from "../shared/Title";

function Similar({ id, titleMovie }) {
  const [list, setList] = useState([]);
  useEffect(() => {
    getData(`movie/${id}/similar?`)
      .then(({ results }) => setList(results.slice(0, 6)))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <section className="w-full">
      <Title position="left" color="white" size={"3xl"}>
        Peliculas similares a {titleMovie}
      </Title>
      {list.length > 1 ? (
        <ul className="flex flex-wrap gap-5 justify-center">
          {list.map((data) => (
            <li className="w-80" key={data.id}>
              <CardPeliculas
                img={data.poster_path}
                tipo={"movie"}
                id={data.id}
                title={data.title}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div className="w-full h-[250px] flex items-center justify-center ">
          <h2 className="text-gray-600">No Hay Peliculas Similares</h2>
        </div>
      )}
    </section>
  );
}

export default Similar;

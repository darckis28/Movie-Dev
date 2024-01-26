import { useState } from "react";
import UltimasP from "../components/List/UltimasP";
import Messaje from "../components/Mensage/Messaje";
import BtnsNexr from "../components/NextBtn/BtnsNexr";
import Aside from "../components/shared/Aside";
import Title from "../components/shared/Title";
import ContainnerRes from "../components/Containners/ContainnerRes";

function Popular() {
  const [page, setPage] = useState(1);
  document.title = "Peliculas Populares";
  return (
    <div className="pt-16">
      <ContainnerRes>
        <div id="Populares" className="col-span-3">
          <Title position="left" color="white" size={"3xl"}>
            Peliculas Populares{page > 1 && ` - Página ${page} `}
          </Title>
          {page < 2 && <Messaje />}
          <div className="m-6">
            <UltimasP params={`movie/popular?page=${page}`} />
          </div>
          <BtnsNexr page={page} setPage={setPage} direccion={"Populares"} />
        </div>
        <Aside />
      </ContainnerRes>
    </div>
  );
}

export default Popular;

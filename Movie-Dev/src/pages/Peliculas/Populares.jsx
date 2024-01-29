import { useState } from "react";
import UltimasP from "../../components/List/UltimasP";
import Messaje from "../../components/Mensage/Messaje";
import BtnsNexr from "../../components/NextBtn/BtnsNexr";
import Aside from "../../components/shared/Aside";
import Title from "../../components/shared/Title";
import ContainnerRes from "../../components/Containners/ContainnerRes";
import CotainnerSec from "../../components/Containners/CotainnerSec";

function Popular() {
  const [page, setPage] = useState(1);
  document.title = "Peliculas Populares";
  return (
    <div className="pt-16">
      <ContainnerRes>
        <CotainnerSec id="Populares">
          <Title position="left" color="white" size={"3xl"}>
            Peliculas Populares{page > 1 && ` - Página ${page} `}
          </Title>
          {page < 2 && <Messaje />}
          <div className="m-6">
            <UltimasP
              params={`movie/popular?`}
              query={`page=${page}&`}
              tipo={"movie"}
            />
          </div>
          <BtnsNexr page={page} setPage={setPage} direccion={"Populares"} />
        </CotainnerSec>
        <Aside />
      </ContainnerRes>
    </div>
  );
}

export default Popular;

import { useState } from "react";
import ContainnerRes from "../../components/Containners/ContainnerRes";
import CotainnerSec from "../../components/Containners/CotainnerSec";
import UltimasP from "../../components/List/UltimasP";
import Messaje from "../../components/Mensage/Messaje";
import Aside from "../../components/shared/Aside";
import Title from "../../components/shared/Title";
import BtnsNexr from "../../components/NextBtn/BtnsNexr";

function PeliculasCartelera() {
  document.title = "Peliculas en cartelera";
  const [page, setPage] = useState(1);
  return (
    <div className="pt-16">
      <ContainnerRes>
        <CotainnerSec id={"Cartelera"}>
          <Title color="white" size={"3xl"} position="left">
            Peliculas en Cartelera {page > 1 && `- Página ${page}`}
          </Title>
          {page < 2 && <Messaje />}
          <UltimasP
            params={`movie/now_playing?`}
            query={`page=${page}&`}
            tipo={"movie"}
          />
          <BtnsNexr
            limit={156}
            page={page}
            setPage={setPage}
            direccion={"Cartelera"}
          />
        </CotainnerSec>
        <Aside />
      </ContainnerRes>
    </div>
  );
}

export default PeliculasCartelera;

import { useState } from "react";
import ContainnerRes from "../components/Containners/ContainnerRes";
import CotainnerSec from "../components/Containners/CotainnerSec";
import Title from "../components/shared/Title";
import UltimasP from "../components/List/UltimasP";
import BtnsNexr from "../components/NextBtn/BtnsNexr";
import Aside from "../components/shared/Aside";
import Messaje from "../components/Mensage/Messaje";

function Accion() {
  document.title = "Peliculas de Accion";
  const [page, setPage] = useState(1);
  return (
    <div className="pt-16">
      <ContainnerRes>
        <CotainnerSec id={"Accion"}>
          <Title color="white" size={"3xl"} position="left">
            Peliculas de Accion {page > 1 && `- Página ${page}`}
          </Title>
          {page < 2 && <Messaje />}
          <UltimasP
            params={`discover/movie?`}
            query={`with_genres=99&page=${page}&`}
          />
          <BtnsNexr
            limit={500}
            page={page}
            setPage={setPage}
            direccion={"Accion"}
          />
        </CotainnerSec>
        <Aside />
      </ContainnerRes>
    </div>
  );
}

export default Accion;

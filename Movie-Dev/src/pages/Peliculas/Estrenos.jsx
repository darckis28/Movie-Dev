import ContainnerRes from "../../components/Containners/ContainnerRes";
import Aside from "../../components/shared/Aside";
import CotainnerSec from "../../components/Containners/CotainnerSec";
import Messaje from "../../components/Mensage/Messaje";
import UltimasP from "../../components/List/UltimasP";
import BtnsNexr from "../../components/NextBtn/BtnsNexr";
import { useState } from "react";
import Title from "../../components/shared/Title";

function Estrenos() {
  document.title = "Estrenos";
  const [page, setPage] = useState(1);
  return (
    <div className="pt-16">
      <ContainnerRes>
        <CotainnerSec id={"Estrenos"}>
          <Title color="white" size={"3xl"} position="left">
            Peliculas en Estreno {page > 1 && `- Página ${page}`}
          </Title>
          {page < 2 && <Messaje />}
          <UltimasP
            params={`movie/upcoming?`}
            query={`page=${page}&`}
            tipo={"movie"}
          />
          <BtnsNexr
            limit={37}
            page={page}
            setPage={setPage}
            direccion={"Estrenos"}
          />
        </CotainnerSec>
        <Aside />
      </ContainnerRes>
    </div>
  );
}

export default Estrenos;

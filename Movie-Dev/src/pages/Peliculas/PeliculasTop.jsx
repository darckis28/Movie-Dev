import { useState } from "react";
import ContainnerRes from "../../components/Containners/ContainnerRes";
import CotainnerSec from "../../components/Containners/CotainnerSec";
import Title from "../../components/shared/Title";
import UltimasP from "../../components/List/UltimasP";
import BtnsNexr from "../../components/NextBtn/BtnsNexr";
import Aside from "../../components/shared/Aside";
import Messaje from "../../components/Mensage/Messaje";

function PeliculasTop() {
  document.title = "Peiculas Top";
  const [page, setPage] = useState(1);
  return (
    <div className="pt-16">
      <ContainnerRes>
        <CotainnerSec id={"Estrenos"}>
          <Title color="white" size={"3xl"} position="left">
            Peliculas Top {page > 1 && `- Página ${page}`}
          </Title>
          {page < 2 && <Messaje />}
          <UltimasP
            params={`movie/top_rated?`}
            query={`page=${page}&`}
            tipo={"movie"}
          />
          <BtnsNexr
            limit={457}
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

export default PeliculasTop;

import { useState } from "react";
import ContainnerRes from "../components/Containners/ContainnerRes";
import CotainnerSec from "../components/Containners/CotainnerSec";
import UltimasP from "../components/List/UltimasP";
import Messaje from "../components/Mensage/Messaje";
import Aside from "../components/shared/Aside";
import BtnsNexr from "../components/NextBtn/BtnsNexr";

function Peliculas() {
  document.title = "Peliculas";
  const [page, setPage] = useState(1);
  return (
    <div className="pt-16">
      <ContainnerRes>
        <CotainnerSec id={"peliculas"}>
          {page < 2 && <Messaje />}
          <UltimasP params={`discover/movie?`} query={`page=${page}&`} />
          <BtnsNexr
            setPage={setPage}
            page={page}
            direccion={"peliculas"}
            limit={500}
          />
        </CotainnerSec>
        <Aside />
      </ContainnerRes>
    </div>
  );
}

export default Peliculas;

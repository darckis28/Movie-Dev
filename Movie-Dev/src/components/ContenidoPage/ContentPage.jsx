import { useState } from "react";
import ContainnerRes from "../Containners/ContainnerRes";
import CotainnerSec from "../Containners/CotainnerSec";
import UltimasP from "../List/UltimasP";
import Messaje from "../Mensage/Messaje";
import BtnsNexr from "../NextBtn/BtnsNexr";
import Aside from "../shared/Aside";
import Title from "../shared/Title";

function ContentPage({ category, title, link = "discover/movie" }) {
  const [page, setPage] = useState(1);
  document.title = `${title}`;
  return (
    <div className="pt-16">
      <ContainnerRes>
        <CotainnerSec id="Populares">
          <Title position="left" color="white" size={"3xl"}>
            {title} {page > 1 && ` - Página ${page} `}
          </Title>
          {page < 2 && <Messaje />}
          <div className="m-6">
            <UltimasP
              params={`${link}?`}
              query={`with_genres=${category}&page=${page}&`}
              title={"Peliculas de Animacion"}
            />
          </div>
          <BtnsNexr
            page={page}
            setPage={setPage}
            direccion={"Populares"}
            limit={120}
          />
        </CotainnerSec>
        <Aside />
      </ContainnerRes>
    </div>
  );
}

export default ContentPage;

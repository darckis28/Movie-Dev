import ContainnerRes from "../components/Containners/ContainnerRes";
import Aside from "../components/shared/Aside";
import Title from "../components/shared/Title";
import Episodios from "../components/Uniques/Episodios";
import PeliculasOn from "../components/Uniques/PeliculasOn";
import Recommen_movie from "../components/Uniques/Recommen_movie";

function Home() {
  document.title = "Movie Dev";
  return (
    <>
      <Recommen_movie />
      <ContainnerRes>
        <section className="col-span-3 ">
          <Title size={"2xl"}>
            Todas las películas de Movie Dev Online Gratis
          </Title>
          <Episodios />
          <PeliculasOn />
        </section>
        <Aside />
      </ContainnerRes>
    </>
  );
}

export default Home;

import Aside from "../components/shared/Aside";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import Title from "../components/shared/Title";
import Episodios from "../components/Uniques/Episodios";
import PeliculasOn from "../components/Uniques/PeliculasOn";
import Recommen_movie from "../components/Uniques/Recommen_movie";

function Home() {
  return (
    <>
      <Header />
      <Recommen_movie />
      <main className="py-9 text-white w-4/5 m-auto grid grid-cols-4 gap-3 ">
        <section className="col-span-3 ">
          <Title size={"2xl"}>
            Todas las películas de Movie Dev Online Gratis
          </Title>
          <Episodios />
          <PeliculasOn />
        </section>
        <Aside />
      </main>
      <Footer />
    </>
  );
}

export default Home;

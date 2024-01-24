import UltimasP from "../components/List/UltimasP";
import Messaje from "../components/Mensage/Messaje";
import Aside from "../components/shared/Aside";
import Title from "../components/shared/Title";

function Popular() {
  document.title = "Peliculas Populares";
  return (
    <div className="mx-36 pt-32 grid grid-cols-4 gap-3">
      <div className="col-span-3">
        <Title position="left" color="white" size={"3xl"}>
          Peliculas Populares
        </Title>
        <Messaje />
        <div>
          <UltimasP params={"movie/popular?page=3"} />
        </div>
      </div>
      <Aside />
    </div>
  );
}

export default Popular;

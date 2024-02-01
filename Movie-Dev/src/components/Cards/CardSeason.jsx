import { getFecha, getPoster } from "../../utilities/convertes";
import Title from "../shared/Title";

function CardSeason({ name, img, fecha, episodios }) {
  return (
    <div
      to={`../serie/`}
      className="text-white flex w-80 gap-3 border border-yellow-500 rounded-lg"
    >
      <img
        className="w-32 h-48 object-cover rounded-s-lg"
        src={getPoster(img)}
        alt=""
      />
      <div>
        <Title size={"lg"} color="'white">
          {name}
        </Title>
        <p>Episodios: {episodios} </p>
        <p>Año: {getFecha(fecha)}</p>
      </div>
    </div>
  );
}

export default CardSeason;

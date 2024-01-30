import { getText } from "../../utilities/convertes";

function Generos({ listGen }) {
  return (
    listGen && (
      <p className="text-gray-400 font-thin text-sm">
        Generos: {getText(listGen, "name")}{" "}
      </p>
    )
  );
}

export default Generos;

import { getText } from "../../utilities/convertes";

function Companias({ listCompanys }) {
  return (
    listCompanys && (
      <p className="text-gray-400 font-thin text-sm">
        {listCompanys.length > 1 ? "Compañias: " : "Compañia: "}
        {getText(listCompanys, "name")}{" "}
      </p>
    )
  );
}

export default Companias;

import { useEffect, useState } from "react";
import { getFecha, getPoints } from "../../utilities/convertes";
import getData from "../../data/data";
function DatePelicula({ date, points, id }) {
  const [detalis, setDetalis] = useState([]);
  useEffect(() => {
    getData(`movie/${id}?`)
      .then(({ genres }) => setDetalis(genres || []))
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div className=" font-extralight text-sm flex flex-wrap gap-3 items-center">
      <span className="text-yellow-500 text-base">
        {getPoints(points)}/<sub>10</sub>{" "}
      </span>
      <span className="text-white">{date && getFecha(date)}</span>
      <span className="text-white">
        {detalis.length > 0 && detalis[0].name}
      </span>
    </div>
  );
}

export default DatePelicula;

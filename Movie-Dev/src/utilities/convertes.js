export const getFecha = (date) => {
  const fecha = new Date(date);
  return fecha.getFullYear();
};
export const getPoints = (points) => points && points.toFixed(0);
export const getPoster = (poster) =>
  `https://image.tmdb.org/t/p/original${poster}`;
export const getText = (array, level) => {
  return array.map((data) => data[level]).join(",");
};

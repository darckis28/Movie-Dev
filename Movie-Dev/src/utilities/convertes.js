export const getFecha = (date) => {
  const fecha = new Date(date);
  return fecha.getFullYear();
};
export const getPoints = (points) => points && points.toFixed(0);
export const getPoster = (poster) =>
  poster
    ? `https://image.tmdb.org/t/p/original${poster}`
    : "https://ih1.redbubble.net/image.1027712254.9762/fposter,small,wall_texture,product,750x1000.u2.jpg";
export const getText = (array, level) => {
  return array.map((data) => data[level]).join(",");
};

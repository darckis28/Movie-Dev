import "./Recomendacion-Movie.css";
function Recommen_movie() {
  return (
    <article className="article">
      <div className="containner">
        <h1 className="text-5xl font-semibold">Mi villano favorito 5</h1>
        <p className=" my-5 flex gap-5 text-sm font-light">
          <small>
            10 /<sub>10</sub>
          </small>{" "}
          <p>1h 46min</p>
          <time>2028</time>
        </p>
        <p className="text-xl font-light text-gray-400 pb-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
          doloremque, dignissimos tenetur placeat illo nulla nesciunt a nostrum
          sequi. Accusantium fugiat quasi ea provident dignissimos autem
          quisquam cumque dolore harum?
        </p>
        <button className="btn btn--yellow">Ver Pelicula</button>
      </div>
    </article>
  );
}

export default Recommen_movie;

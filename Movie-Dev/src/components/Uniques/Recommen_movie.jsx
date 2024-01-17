import "./Recomendacion-Movie.css";
function Recommen_movie() {
  return (
    <article className="article">
      <div className="containner">
        <h1 className="lg:text-5xl font-semibold text-3xl">
          Mi villano favorito 5
        </h1>
        <p className=" lg:my-5 flex gap-5 text-sm font-light my-1">
          <small>
            10 /<sub>10</sub>
          </small>{" "}
          <p>1h 46min</p>
          <time>2028</time>
        </p>
        <p className="lg:text-xl font-light text-gray-400 pb-7">
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

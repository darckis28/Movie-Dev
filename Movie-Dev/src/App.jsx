import "./App.css";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Popular from "./pages/Peliculas/Populares";
import Page404 from "./pages/page404";
import Peliculas from "./pages/Peliculas/Peliculas";
import Estrenos from "./pages/Peliculas/Estrenos";
import PeliculasTop from "./pages/Peliculas/PeliculasTop";
import PeliculasCartelera from "./pages/Peliculas/PeliculasCartelera";
import Accion from "./pages/Categorias/Accion";
import Animacion from "./pages/Categorias/Animacion";
import Crimen from "./pages/Categorias/Crimen";
import Familia from "./pages/Categorias/Familia";
import Misterio from "./pages/Categorias/Misterio";
import Suspenso from "./pages/Categorias/Suspenso";
import Aventura from "./pages/Categorias/Aventura";
import CienciaFiccion from "./pages/Categorias/CienciaFiccion";
import Drama from "./pages/Categorias/Drama";
import Comedia from "./pages/Categorias/Comedia";
import Romance from "./pages/Categorias/Romance";
import Horror from "./pages/Categorias/Horror";
import Musica from "./pages/Categorias/Musica";
import Historia from "./pages/Categorias/Historia";
import Occidental from "./pages/Categorias/Occidental";
import Guerra from "./pages/Categorias/Guerra";
import PeliculasTV from "./pages/Peliculas/PeliculasTV";
import Fantasia from "./pages/Categorias/Fantasia";
import Documentales from "./pages/Categorias/Documentales";
import Series from "./pages/Series/Series";
import SerieAlAire from "./pages/Series/SerieAlAire";
import SeriesTop from "./pages/Series/SeriesTop";
import TendenciaSemana from "./pages/Series/TendenciaSemana";
import TEndenciaDiaria from "./pages/Series/TEndenciaDiaria";
import MovieId from "./pages/MovieId";
import SerieId from "./pages/SerieId";

function App() {
  return (
    <div className="h-screen w-full relative font-poppins">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Popular" element={<Popular />}>
          <Route path="movie/:movieID" element={<MovieId />} />
        </Route>
        <Route path="Peliculas" element={<Peliculas />} />
        <Route path="Estrenos" element={<Estrenos />} />
        <Route path="Peliculas_Top" element={<PeliculasTop />} />
        <Route path="Peliculas_en_cartelera" element={<PeliculasCartelera />} />
        <Route path="Accion" element={<Accion />} />
        <Route path="Animacion" element={<Animacion />} />
        <Route path="Crimen" element={<Crimen />} />
        <Route path="Familia" element={<Familia />} />
        <Route path="Misterio" element={<Misterio />} />
        <Route path="Aventura" element={<Aventura />} />
        <Route path="Suspenso" element={<Suspenso />} />
        <Route path="Ciencia_Ficcion" element={<CienciaFiccion />} />
        <Route path="Comedia" element={<Comedia />} />
        <Route path="Drama" element={<Drama />} />
        <Route path="Romance" element={<Romance />} />
        <Route path="Horror" element={<Horror />} />
        <Route path="Musica" element={<Musica />} />
        <Route path="Historia" element={<Historia />} />
        <Route path="Occidental" element={<Occidental />} />
        <Route path="Guerra" element={<Guerra />} />
        <Route path="Peliculas_de_TV" element={<PeliculasTV />} />
        <Route path="Fantasia" element={<Fantasia />} />
        <Route path="Documentales" element={<Documentales />} />
        <Route path="Series" element={<Series />} />
        <Route path="Al_Aire" element={<SerieAlAire />} />
        <Route path="Series_Top" element={<SeriesTop />} />
        <Route path="Tendencias_Semanales" element={<TendenciaSemana />} />
        <Route path="Tendencias_diarias" element={<TEndenciaDiaria />} />
        <Route path="movie/:movieID" element={<MovieId />} />
        <Route path="serie/:serieID" element={<SerieId />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

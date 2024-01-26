import "./App.css";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Popular from "./pages/Populares";
import Page404 from "./pages/page404";
import Peliculas from "./pages/Peliculas";
import Estrenos from "./pages/Estrenos";
import PeliculasTop from "./pages/PeliculasTop";
import PeliculasCartelera from "./pages/PeliculasCartelera";
import Accion from "./pages/Accion";
import Animacion from "./pages/Animacion";
import Crimen from "./pages/Crimen";
import Familia from "./pages/Familia";
import Misterio from "./pages/Misterio";
import Suspenso from "./pages/Suspenso";
import Aventura from "./pages/Aventura";
import CienciaFiccion from "./pages/CienciaFiccion";
import Drama from "./pages/Drama";
import Comedia from "./pages/Comedia";
import Romance from "./pages/Romance";
import Horror from "./pages/Horror";
import Musica from "./pages/Musica";
import Historia from "./pages/Historia";
import Occidental from "./pages/Occidental";
import Guerra from "./pages/Guerra";
import PeliculasTV from "./pages/PeliculasTV";
import Fantasia from "./pages/Fantasia";
import Documentales from "./pages/Documentales";
import Series from "./pages/Series";
import SerieAlAire from "./pages/SerieAlAire";
import SeriesTop from "./pages/SeriesTop";
import TendenciaSemana from "./pages/TendenciaSemana";
import TEndenciaDiaria from "./pages/TEndenciaDiaria";

function App() {
  return (
    <div className="h-screen w-full relative font-poppins">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Popular" element={<Popular />} />
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

        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

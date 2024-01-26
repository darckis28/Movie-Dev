import "./App.css";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Popular from "./pages/Populares";

function App() {
  return (
    <div className="h-screen w-full relative font-poppins">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Popular" element={<Popular />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

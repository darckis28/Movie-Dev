import "./App.css";
import Recommen_movie from "./components/Uniques/Recommen_movie";
import Header from "./components/shared/Header";

function App() {
  return (
    <div className="h-screen w-full relative font-poppins">
      <Header />
      <Recommen_movie />
    </div>
  );
}

export default App;

import { useState } from "react";
import "./Aside.css";
import Title from "./Title";
import CardX from "../Cards/CardX";

function Aside() {
  const [active, setActive] = useState(true);
  const handelClick = (e) => {
    const btns = document.querySelectorAll(".btn--aside");
    btns.forEach((x) => x.classList.remove("active"));
    e.target.classList.add("active");
    if (e.target.innerText === "Dia") setActive(true);
    else setActive(false);
  };
  return (
    <aside className="col-span-1">
      <Title size={"xl"}>Peliculas Destacadas</Title>
      <div className="flex flex-1 w-full">
        <button onClick={handelClick} className="btn--aside active">
          Dia
        </button>
        <button onClick={handelClick} className="btn--aside ">
          Semana
        </button>
      </div>
      {active && (
        <section className=" w-full mt-5">
          <ul className=" flex flex-col gap-2">
            <li>
              <CardX />{" "}
            </li>
            <li>
              <CardX />{" "}
            </li>
            <li>
              <CardX />{" "}
            </li>
            <li>
              <CardX />{" "}
            </li>
            <li>
              <CardX />{" "}
            </li>
            <li>
              <CardX />{" "}
            </li>
          </ul>
        </section>
      )}
      {!active && (
        <section className="w-full mt-5">
          <ul className=" flex flex-col gap-2">
            <li>
              <CardX />{" "}
            </li>
            <li>
              <CardX />{" "}
            </li>
            <li>
              <CardX />{" "}
            </li>
            <li>
              <CardX />{" "}
            </li>
            <li>
              <CardX />{" "}
            </li>
            <li>
              <CardX />{" "}
            </li>
          </ul>
        </section>
      )}
    </aside>
  );
}

export default Aside;

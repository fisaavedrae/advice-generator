import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [advice, setAdvice] = useState({
    id: 117,
    advice:
      "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
  });

  useEffect(() => {
    readAPI();
  }, []);
  const readAPI = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip);
  };

  return (
    <>
      <div className=" d-flex justify-content-center  ">
        <div className="bg-dark-grayish-blue d-flex flex-column justify-content-center ">
          <h1 className="text-neon-green">Advice #{advice.id}</h1>
          <p className="text-white">{'"' + advice.advice + '"'} </p>
          <div className="divider d-flex justify-content-center flex-row align-items-center">
            <div className="linea"></div>
            <i className="fa-solid fa-pause icono"></i>
            <div className="linea"></div>
          </div>
          <div className="position-relative bg-success mt-3">
            <div className=" position-relative">
              <span className="bg-neon-green position-absolute top-200 start-50 translate-middle badge  rounded-circle p-2">
                <button className="btn-neon-green" onClick={readAPI}>
                  <i className="fa-solid fa-dice-five"></i>
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

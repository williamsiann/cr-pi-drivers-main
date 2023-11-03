import { Link } from "react-router-dom";
import "./Landing.css";
import F1Rojo from "../../assets/F1Rojo.png"; // Reemplaza con la ruta a tu imagen
import { useState, useEffect } from "react";

const Landing = () => {
  const [showText, setViewText] = useState(false);

  useEffect(() => {

    const timeout = setTimeout(() => {
      setViewText(true);
    }, 4000);

    return () => clearTimeout(timeout); // Limpia el temporizador en el desmontaje del componente
  }, []);

  return (
    <div className="landing-container">
      <div>
        <h1 className="landing-h1">Welcome</h1>
      </div>
      <div>
        <Link to={"/home"}>
          <img src={F1Rojo} className="landing-image" />
        </Link>
      </div>
      {showText && (
        <div className="landing-text">
        <h1>Hace clic en el f1</h1>
      </div>
      )}
    </div>
  );
};

export default Landing;




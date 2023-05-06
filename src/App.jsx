import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Form from "./components/Form/Form.jsx";
import MiOrg from "./components/MiOrg";
import Equipo from "./components/Equipo";

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  //Ternario --> condicion ? se muestra si es true : se muestra si es false
  // condicion && seMuestra

  // Lista de equipos
  const equipos = [
    {
      titulo: "Programación",
      colorPrimario: "#57c278",
      colorSecundario: "#D9F7E9",
    },
    {
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      titulo: "Devops",
      colorPrimario: "#E06EBF",
      colorSecundario: "#FDE7E8",
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ];

  return (
    <div>
      <Header />
      {mostrarFormulario ? <Form /> : null}
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {equipos.map((equipo) => {
        return <Equipo datos={equipo} key={equipo.titulo} />;
      })}
    </div>
  );
}

export default App;

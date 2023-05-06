import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Form from "./components/Form/Form.jsx";
import MiOrg from "./components/MiOrg";
import Equipo from "./components/Equipo";
import Footer from "./components/Footer";

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([
    {
      equipo: "Front End",
      foto: "https://github.com/agnivade.png",
      nombre: "Agniva De Sarker",
      puesto: "Instructor",
    },
    {
      equipo: "Front End",
      foto: "https://github.com/midudev.png",
      nombre: "Miguel Angel Duran",
      puesto: "Instructor",
    },
    {
      equipo: "Front End",
      foto: "https://github.com/steven-tey.png",
      nombre: "Steven Tey",
      puesto: "Instructor",
    },
    {
      equipo: "Devops",
      foto: "https://github.com/bradfitz.png",
      nombre: "Brad Fitzpatrick",
      puesto: "Instructor",
    },
    {
      equipo: "Devops",
      foto: "https://github.com/kelseyhightower.png",
      nombre: "Kelsey Hightower",
      puesto: "Instructor",
    },
    {
      equipo: "Móvil",
      foto: "https://github.com/merrymercy.png",
      nombre: "Lianmin Zheng",
      puesto: "Instructor",
    },
  ]);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log("nuevo colaborador", colaborador);
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador]);
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
      {mostrarFormulario ? (
        <Form
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
        />
      ) : null}

      <MiOrg cambiarMostrar={cambiarMostrar} />
      {equipos.map((equipo) => {
        return (
          <Equipo
            datos={equipo}
            key={equipo.titulo}
            colaboradores={colaboradores.filter(
              (colaborador) => colaborador.equipo === equipo.titulo
            )}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;

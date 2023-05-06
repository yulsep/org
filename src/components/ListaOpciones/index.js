import "./ListaOpciones.css";

const ListaOpciones = (props) => {
  const equipos = [
    "Programación",
    "Fron End",
    "Data Science",
    "Devops",
    "UX y Diseño",
    "Móvil",
    "Inovación y Gestión",
  ];

  const manejarCambio = (e) => {
    console.log("cambio", e.target.value);
    props.actualizarEquipo(e.target.value);
  };

  return (
    <div className="lista-opciones">
      <label>Equipos</label>
      <select value={props.valor} onChange={manejarCambio}>
        <option value="" disabled defaultValue="" hidden>
          Seleccionar equipo
        </option>
        {equipos.map((equipo) => (
          <option key={equipo} value={equipo}>
            {equipo}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ListaOpciones;

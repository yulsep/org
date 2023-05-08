import { useState } from "react";
import "./Campo.css";

const Campo = (props) => {
  const placeholderModificador = `${props.placeholder}...`;

  //Destructuración
  const { type = "text" } = props;

  const manejarCambio = (e) => {
    props.actualizarValor(e.target.value);
  };

  return (
    <div className={`campo campo-${type}`}>
      <label>{props.titulo}</label>
      <input
        type={type}
        placeholder={placeholderModificador}
        required={props.required}
        value={props.value}
        onChange={manejarCambio}
      />
    </div>
  );
};

export default Campo;

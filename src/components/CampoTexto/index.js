import { useState } from "react";
import "../CampoTexto/CampoTexto.css";

const CampoTexto = (props) => {
  const placeholderModificador = `${props.placeholder}...`;

  const manejarCambio = (e) => {
    props.actualizarValor(e.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.titulo}</label>
      <input
        type="text"
        placeholder={placeholderModificador}
        required={props.required}
        value={props.value}
        onChange={manejarCambio}
      />
    </div>
  );
};

export default CampoTexto;

import React from "react";
import { Link, useParams } from "react-router-dom";

import { AmbitoGlobal } from "../components/Scope/AmbitoGlobal";
import { AmbitoLocal } from "../components/Scope/AmbitoLocal";
import { AmbitoBloque } from "../components/Scope/AmbitoBloque";
import { AmbitoAnidado } from "../components/Scope/AmbitoAnidado";

import barScript from "../assets/barScriptLogo.png";


export const BarScope = () => {
  const {ambitoSelected} = useParams();

  return (
    <div className="">
      <img className="img-logo-barScript" src={barScript} alt="" />
      <h2>Bienvenido a BarScript</h2>
      {ambitoSelected === "global" && <AmbitoGlobal />}
      {ambitoSelected === "local" && <AmbitoLocal />}
      {ambitoSelected === "bloque" && <AmbitoBloque />}
      {ambitoSelected === "anidado" && <AmbitoAnidado />}

    </div>
  );
};

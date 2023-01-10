import React from "react";
import { SCInfoPageCard } from "../styled-components";

const InfoPageCard = ({
  full_name,
  email,
  birth_date,
  country_of_origin,
  terms_and_conditions,
}) => {
  return (
    <SCInfoPageCard>
      <h2>{full_name}</h2>
      <label>Email:</label>
      <span>{email}</span>
      <label>Fecha de cumpleaños:</label>
      <span>{birth_date}</span>
      <label>Pais de origen:</label>
      <span>{country_of_origin}</span>
      <label>Terminos y condiciones:</label>
      <span>{terms_and_conditions ? "Aceptados" : "No aceptados"}</span>
    </SCInfoPageCard>
  );
};

export default InfoPageCard;

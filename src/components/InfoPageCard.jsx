import React from "react";
import {
  InfoPageCardH2,
  InfoPageCardLabel,
  InfoPageCardSpan,
  SCInfoPageCard,
} from "../styled-components";

const InfoPageCard = ({
  full_name,
  email,
  birth_date,
  country_of_origin,
  terms_and_conditions,
}) => {
  return (
    <SCInfoPageCard>
      <InfoPageCardH2>{full_name}</InfoPageCardH2>
      <InfoPageCardLabel>Email:</InfoPageCardLabel>
      <InfoPageCardSpan>{email}</InfoPageCardSpan>
      <InfoPageCardLabel>Fecha de cumpleaños:</InfoPageCardLabel>
      <InfoPageCardSpan>{birth_date}</InfoPageCardSpan>
      <InfoPageCardLabel>Pais de origen:</InfoPageCardLabel>
      <InfoPageCardSpan>{country_of_origin}</InfoPageCardSpan>
      <InfoPageCardLabel>Terminos y condiciones:</InfoPageCardLabel>
      <InfoPageCardSpan>
        {terms_and_conditions ? "Aceptados" : "No aceptados"}
      </InfoPageCardSpan>
    </SCInfoPageCard>
  );
};

export default InfoPageCard;

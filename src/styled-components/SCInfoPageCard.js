import styled from "styled-components"

export const SCInfoPageCard = styled.div`

--form-background-color:rgb(31, 41, 55);
--input-border-radius:0.25rem;
--light-blue:#118AB2;

background-color:var(--form-background-color);
border-radius:var(--input-border-radius);
box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.1);
font-weight:300;
text-align:left;
padding:1rem;
margin:1rem;
`;
export const InfoPageCardH2 = styled.h2`
color:var(--light-blue);
`;

export const InfoPageCardLabel = styled.label`
font-weight:700;
`;

export const InfoPageCardSpan = styled.span`
display:block;
`;
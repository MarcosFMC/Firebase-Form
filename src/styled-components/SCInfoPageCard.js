import styled from "styled-components"

export const SCInfoPageCard = styled.div`

--form-background-color:rgb(31, 41, 55);
--input-border-color:rgb(107 114 128);
--input-border-radius:0.25rem;
--danger-color:#dc3545;
--light-blue:#118AB2;
--base-grey:rgb(17 24 39);

background-color:var(--form-background-color);
border-radius:var(--input-border-radius);
box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.1);
font-weight:300;
text-align:left;
padding:1rem;
margin:1rem;

    span{
        display:block;
    }
    label{
        font-weight:700;
    }
`
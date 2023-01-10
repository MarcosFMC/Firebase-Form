import styled from "styled-components";

export const HomePageCustomInput = styled.input`

font-family:roboto;
font-weight:300;
width:100%;
height:2rem;
border:1px solid var(--input-border-color);
border-radius:var(--input-border-radius);
text-align:center;
background-color:var(--form-background-color);


&:focus{
    outline:none;
    border:1px solid var(--light-blue);
}

&:-webkit-autofill,
&:-webkit-autofill:hover,
&:-webkit-autofill:focus,
&:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0px 1000px var(--base-grey) inset;
}
`;

export const HomePageCheckboxInput = styled(HomePageCustomInput)`
width:1rem;
appearance:none;
height:1rem;

&:checked{
    background-color:var(--base-grey);
}
`;

export const HomePageSubmitInput = styled(HomePageCustomInput)`

background-color:var(--light-blue);
font-family:roboto;
font-weight:700;
font-size:1rem;
border:none;
cursor:pointer;
width:100%;

&:hover{
    background-color:#117393;
}
`;

export const HomePageSelect= styled.select`
font-family:roboto;
font-weight:300;
width:100%;
height:2rem;
border:1px solid var(--input-border-color);
border-radius:var(--input-border-radius);
text-align:center;
background-color:var(--form-background-color);

&:focus{
    outline:none;
    border:1px solid var(--light-blue);
}

&:-webkit-autofill,
&:-webkit-autofill:hover,
&:-webkit-autofill:focus,
&:-webkit-autofill:active  {
  -webkit-box-shadow: 0 0 0px 1000px var(--base-grey) inset;
}
`;

export const HomePageLabel = styled.label`
display:block;
margin:0.1rem;
font-weight:700;
`;

export const HomePageValidationError = styled.span`
display:block;
color:var(--danger-color);
`;
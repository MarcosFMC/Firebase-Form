import styled from "styled-components";

export const SCHomePageForm = styled.form`
--form-background-color:rgb(31, 41, 55);
--input-border-color:rgb(107 114 128);
--input-border-radius:0.25rem;
--danger-color:#dc3545;
--light-blue:#118AB2;
--base-grey:rgb(17 24 39);

background-color:var(--form-background-color);
border-radius:var(--input-border-radius);
box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.1);
padding:1rem;
text-align:center;
font-weight:300;
width:300px;
input,select{
    font-family:roboto;
    font-weight:300;
    width:100%;
    height:2rem;
    margin-bottom:1rem;
    border:1px solid var(--input-border-color);
    border-radius:var(--input-border-radius);
    text-align:center;
    background-color:var(--form-background-color);
}

input:focus,select:focus{
    outline:none;
    border:1px solid var(--light-blue);
}

input[type="checkbox"]{
    width:1rem;
    appearance:none;
    height:1rem;
}
input[type="checkbox"]:checked{
  background-color:var(--base-grey);
}

input[type="submit"]{
    background-color:var(--light-blue);
    font-family:roboto;
    font-weight:700;
    font-size:1rem;
    border:none;
    cursor:pointer;
}

input[type="submit"]:hover{
    background-color:#117393;
}

label{
    display:block;
    margin:0.1rem;
    font-weight:700;
}

span{
    display:block;
    color:var(--danger-color);
    margin-bottom:1rem;
}

input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0px 1000px var(--base-grey) inset;
}

`;
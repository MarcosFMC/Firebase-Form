import styled from "styled-components";

export const SCSnackbar = styled.div
`



 position:absolute;
 margin:1rem;
 top:0;
 right:0;
 background-color:#198754;
 box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
 padding:1rem;
 animation: snackbarAnim 0.5s ease-in-out 0s 1 normal forwards;

 
 @keyframes snackbarAnim {
	0% {
		transform: translateX(250px);
	}

	100% {
		transform: translateX(0);
	}
}

span{
    color:#fff;
    margin:0;
}

.router-link{
    color:#fff;
}
.router-link:hover{
    color:black;
}
`;
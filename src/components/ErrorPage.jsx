import React from "react";
import { SCErrorPage } from "../styled-components";
import Snackbar from "./Snackbar";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <SCErrorPage>
      <h2>Error 404: Not found</h2>
      <Snackbar message="Ruta no encontrada" danger={true}>
        <br />
        <Link className="router-link" to="/">
          Click para ir a una ruta valida
        </Link>
      </Snackbar>
    </SCErrorPage>
  );
};

export default ErrorPage;

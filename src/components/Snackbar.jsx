import React from "react";
import { SCSnackbar, SnackbarMessage } from "../styled-components";

const Snackbar = ({ message, children, danger }) => {
  return (
    <SCSnackbar className={danger == true ? "danger" : undefined}>
      <SnackbarMessage>{message}</SnackbarMessage>
      {children}
    </SCSnackbar>
  );
};

export default Snackbar;

import React from "react";
import { SCSnackbar } from "../styled-components";

const Snackbar = ({ message, children, danger }) => {
  return (
    <SCSnackbar className={danger == true ? "danger" : undefined}>
      <span>{message}</span>
      {children}
    </SCSnackbar>
  );
};

export default Snackbar;

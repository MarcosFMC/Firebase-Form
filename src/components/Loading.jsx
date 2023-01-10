import React from "react";
import { SCLoading } from "../styled-components";

const Loading = () => {
  return (
    <SCLoading className="sk-chase">
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
    </SCLoading>
  );
};

export default Loading;

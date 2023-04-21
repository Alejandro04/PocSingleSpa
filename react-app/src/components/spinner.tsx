import React from "react";
import { SpinnerStyles } from "../utils/spinnerStyles";

/*
  TODO: The styles should be implemented with BEM and SASS
*/
const spinnerStyles = new SpinnerStyles();

export const Spinner = (
  <div style={{ textAlign: "center" }}>
    <div style={spinnerStyles.greenStyle}></div>
  </div>
);

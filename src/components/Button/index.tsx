import React from "react";

//style button
import "./styles.css";

export default function Button(props) {
  return (
    <button style={{ backgroundColor: `${props.bgColor}` }}>
      {props.textButton}
    </button>
  );
}

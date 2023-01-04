import React from "react";

//style button
import "./styles.css";

export default function Button(props: { bgColor: string; textButton: string }) {
  return (
    <button style={{ backgroundColor: `${props.bgColor}` }}>
      {props.textButton}
    </button>
  );
}

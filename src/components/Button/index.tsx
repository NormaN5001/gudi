import React from "react";

//style button
import "./styles.css";

export default function Button(props: {
  bgColor: string;
  textButton: string;
  colorFont: string;
  border: string;
}) {
  return (
    <button
      style={{
        backgroundColor: `${props.bgColor}`,
        color: `${props.colorFont}`,
        border: `${props.border}`,
      }}
    >
      {props.textButton}
    </button>
  );
}

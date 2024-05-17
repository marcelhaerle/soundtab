import React from "react";
import "./Button.css";

export default function Button({ text }: { text: string }) {
  return (
    <div className="button-wrapper">
      <button className="button">{text}</button>
    </div>
  );
}

import React from "react";
import "./Grid.css";
import { Layout } from "../preload";

export default function Grid({
  layout,
  children,
}: {
  layout: Layout;
  children: JSX.Element[];
}) {
  return (
    <div
      className={`grid grid-rows-${layout.rows} grid-columns-${layout.columns}`}
    >
      {children}
    </div>
  );
}

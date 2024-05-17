import React from "react";
import "./Grid.css";

export default function Grid({
  children,
  rows,
  columns,
}: {
  children: JSX.Element[];
  rows: number;
  columns: number;
}) {
  return (
    <div className={`grid grid-rows-${rows} grid-columns-${columns}`}>
      {children}
    </div>
  );
}

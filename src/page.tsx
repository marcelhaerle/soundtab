import React from "react";
import Grid from "./components/Grid";
import Button from "./components/Button";

export default function Page() {
  const generateButtons = () => {
    const buttons = [];
    for (let i = 1; i <= 16; i++) {
      buttons.push(<Button text={i.toString()} />);
    }
    return buttons;
  };

  const buttons = generateButtons();

  return (
    <div className="container">
      <Grid rows={4} columns={4}>
        {buttons}
      </Grid>
    </div>
  );
}

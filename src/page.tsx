import React from "react";
import Grid from "./components/Grid";
import Slot from "./components/Slot";

export default function Page() {
  const generateSlots = () => {
    const slots = [];
    for (let i = 1; i <= 16; i++) {
      slots.push(<Slot text={i.toString()} key={i} />);
    }
    return slots;
  };

  const slots = generateSlots();

  return (
    <div className="container">
      <Grid rows={4} columns={4}>
        {slots}
      </Grid>
    </div>
  );
}

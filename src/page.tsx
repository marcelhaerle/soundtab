import React, { useEffect, useState } from "react";
import Grid from "./components/Grid";
import Slot from "./components/Slot";
import { Layout } from "./preload";

export default function Page() {
  const [layout, setLayout] = useState<Layout>({ rows: 4, columns: 4 });
  const [slots, setSlots] = useState<JSX.Element[]>([]);

  const generateSlots = () => {
    const slots = [];
    for (let i = 1; i <= 100; i++) {
      slots.push(<Slot text={i.toString()} key={i} />);
    }
    return slots;
  };

  const generatedSlots = generateSlots();

  useEffect(() => {
    setSlots(generatedSlots.slice(0, layout.rows * layout.columns));
    window.api.onLayoutChanged((layout: Layout) => {
      setLayout(layout);
      setSlots(generatedSlots.slice(0, layout.rows * layout.columns));
    });
  }, []);

  return (
    <div className="container">
      <Grid layout={layout}>{slots}</Grid>
    </div>
  );
}

import "./App.css";
import colorData from "./data/data.json";
import { useState } from "react";
import ColorList from "./ColorList";

export default function App() {
  const [colors, setColors] = useState(colorData);

  return (
    <ColorList
      colors={colors}
      onAddColor = {() => {
        const newColor = {
          id: "e38d3bf8-cebd-444b-9263-50117d798980",
          title: "Summer skies",
          color: "#87ceeb",
          rating: 5
        };

        setColors(arr => [...arr, newColor]);
      }}
      onRemoveColor={(id) => {
        const newColors = colors.filter((c) => c.id !== id);
        setColors(newColors);
      }}
    ></ColorList>
  );
}

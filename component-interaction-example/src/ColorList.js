import Color from "./Color";
import { FaPlus } from "react-icons/fa";

export default function ColorList({
  colors = [],
  onRemoveColor = (f) => f,
  onAddColor = (f) => f,
}) {
  if (colors.length === 0) {
    return (
      <>
        <p>No colors listed. (Add a color)</p>
        <button>
          <FaPlus onClick={() => onAddColor()}></FaPlus>
        </button>
      </>
    );
  }

  return (
    <>
      {colors.map((c) => (
        <Color key={c.id} {...c} onRemoveColor={onRemoveColor}></Color>
      ))}
    </>
  );
}

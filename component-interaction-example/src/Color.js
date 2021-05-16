import { FaTrash } from "react-icons/fa";

export default function Color({
  id,
  title,
  color,
  rating,
  onRemoveColor = (f) => f,
}) {
  return (
    <div>
      <h1>{title}</h1>
      <h3>Rating: {rating}</h3>
      <button onClick={() => onRemoveColor(id)}>
        <FaTrash></FaTrash>
      </button>
      <div style={{ height: 50, backgroundColor: color }}></div>
    </div>
  );
}

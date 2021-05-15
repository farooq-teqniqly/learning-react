import Star from "./Star";
import { useState } from "react";

export default function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <>
      {[...Array(totalStars)].map((_, i) => (
        <Star
          key={i}
          selected={i < selectedStars}
          onSelect={() => setSelectedStars(i + 1)}
        ></Star>
      ))}
      <p>
        {selectedStars} of {totalStars} stars.
      </p>
    </>
  );
}

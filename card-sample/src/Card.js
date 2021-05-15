function Card({ vehicleName, startingPrice, models }) {
  return (
    <div>
      <h1>{vehicleName}</h1>
      <p>Starting at ${startingPrice}</p>
      <p>Models:</p>
      {models.map((m, i) => {
        return <li key={i}>{m.name}</li>;
      })}
    </div>
  );
}

export default Card;

function Card({ vehicleName, startingPrice, models }) {
  return (
    <>
      <h1>{vehicleName}</h1>
      <p>Starting at ${startingPrice}</p>
      <p>Models:</p>
      {models.map((m, i) => {
        return <li key={i}>{m.name}</li>;
      })}
    </>
  );
}

export default Card;

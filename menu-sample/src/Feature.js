function Feature({ model, features }) {
  return (
    <section id={model.toLowerCase().replace(/ /g, "-")}>
      <h1>{model}</h1>
      <ul>
        {features.map((feature, i) => (
          <li key={i}>{feature.name}</li>
        ))}
      </ul>
    </section>
  );
}

export default Feature;

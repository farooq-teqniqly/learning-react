import Feature from "./Feature";

function Menu({ specs }) {
  return (
    <article>
      <div>
        {specs.map((spec, i) => {
          return <Feature key={i} {...spec}></Feature>;
        })}
      </div>
    </article>
  );
}

export default Menu;

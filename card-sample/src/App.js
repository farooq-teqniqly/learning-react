import "./App.css";
import Card from "./Card";

const data = [
  {
    vehicleName: "E-Class Cabriolet",
    startingPrice: 71950,
    models: [
      {
        name: "E 450 Cabriolet",
      },
      {
        name: "E 450 4MATIC Cabriolet",
      },
      {
        name: "AMG E 53 Cabriolet",
      },
    ],
  },
  {
    vehicleName: "C-Class Cabriolet",
    startingPrice: 54700,
    models: [
      {
        name: "C 300 Cabriolet",
      },
      {
        name: "C 300 4MATIC Cabriolet",
      },
      {
        name: "AMG C 43 Cabriolet",
      },
      {
        name: "AMG C 63 Cabriolet",
      },
      {
        name: "AMG C 63 S Cabriolet",
      },
    ],
  },
];

function App() {
  return (
    <ul>
      {data.map((d, i) => {
        return <Card key={i} {...d}></Card>;
      })}
    </ul>
  );
}

export default App;

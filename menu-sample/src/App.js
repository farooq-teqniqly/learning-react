import "./App.css";
import Menu from "./Menu";

const data = [
  {
    model: "E53 AMG Cabriolet",
    features: [
      { name: "Driver Assistance Package" },
      { name: "AMG Performance Exhaust" },
    ],
  },
  {
    model: "C63 AMG Cabriolet",
    features: [{ name: "Burmester Stereo" }, { name: "AMG Drive Unit" }],
  },
];

function App() {
  return <Menu specs={data}></Menu>;
}

export default App;

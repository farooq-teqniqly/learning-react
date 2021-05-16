export default function VehicleCard({ vehicles, onRemoveFeature = (f) => f }) {
  return (vehicles.map((v, i) => {
    return (<>
      <h1>{v.vehicleName}</h1>
      <h3>${v.startingPrice}</h3>
    </>);
  }));
}
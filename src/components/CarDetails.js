const CarDetails = ({ brand, km, color, newCar }) => {
  return (
    <div>
      <h2>Car details</h2>
      <ul>
        <li>Brand: {brand}</li>
        <li>Km: {km}</li>
        <li>Color: {color}</li>
      </ul>
      {newCar && <p>This car is new!</p>}
    </div>
  );
};

export default CarDetails;

import { useState } from "react";
import "./App.css";
import City from "./assets/city.jpg";
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";

function App() {
  const name = "John";
  const [userName] = useState("Deyvison");

  const cars = [
    { id: 1, brand: "Ferrari", color: "Red", newCar: true, km: 0 },
    { id: 1, brand: "KIA", color: "White", newCar: false, km: 25000 },
    { id: 1, brand: "Ford", color: "Black", newCar: false, km: 35000 },
  ];
  return (
    <div className="App">
      <h1>Avançando em React</h1>

      {/* Image in public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>

      {/*Image in asset */}
      <div>
        <img src={City} alt="City" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={userName} />
      {/* destructuring */}
      <CarDetails brand="BMW" km={0} color="White" newCar={true} />
      {/* reusing */}
      <CarDetails brand="Ford" color="Red" km={35000} newCar={false} />
      <CarDetails brand="Fiat" color="Black" km={1500} newCar={false} />
      {/* Loop in object array */}
      {cars.map((car) => (
        <CarDetails
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
    </div>
  );
}

export default App;

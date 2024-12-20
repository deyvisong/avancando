import { useState } from "react";
import "./App.css";
import City from "./assets/city.jpg";
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";
import UserDetails from "./components/UserDetails";

function App() {
  // const name = "John";
  const [userName] = useState("Deyvison");

  const cars = [
    { id: 1, brand: "Ferrari", color: "Red", newCar: true, km: 0 },
    { id: 2, brand: "KIA", color: "White", newCar: false, km: 25000 },
    { id: 3, brand: "Ford", color: "Black", newCar: false, km: 35000 },
  ];

  const users = [
    { id: 1, name: "Deyvison", age: 35, job: "Developer" },
    { id: 2, name: "John", age: 17, job: "Prophet" },
    { id: 3, name: "Jose", age: 26, job: "Governor" },
  ];

  function showMessage() {
    console.log("Event from parent component");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

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
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
      {/* fragment */}
      <Fragment propFragment="teste" />
      {/* children */}
      <Container myValue="Testing">
        <p>This is the content</p>
      </Container>
      <Container myValue="Testing 2">
        <h5>Testing container</h5>
        <p>another test</p>
      </Container>
      {/* exec function */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {/* Challenge */}
      {users.map((users) => (
        <UserDetails
          key={users.id}
          name={users.name}
          age={users.age}
          job={users.job}
        />
      ))}
    </div>
  );
}

export default App;

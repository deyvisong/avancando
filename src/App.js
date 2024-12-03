import { useState } from "react";
import "./App.css";
import City from "./assets/city.jpg";
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";

function App() {
  const name = "John";
  const [userName] = useState("Deyvison");
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
      <ShowUserName name={userName} />
    </div>
  );
}

export default App;

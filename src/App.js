import "./App.css";
import City from "./assets/city.jpg";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";

function App() {
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
    </div>
  );
}

export default App;

import { useState } from "react";

function ManageData() {
  let someData = 10;
  console.log(someData);

  const [number, setNumber] = useState(someData);
  console.log(number);
  return (
    <div>
      <div>
        <p>Value: {someData}</p>
        <button onClick={() => (someData = 15)}>Change variable</button>
      </div>
      <div>
        <p>Value: {number}</p>
        <button onClick={() => setNumber(someData + 10)}>Change state</button>
      </div>
    </div>
  );
}

export default ManageData;

import { useState } from "react";

function ConditionalRender() {
  const [x] = useState(true);

  const [name, setName] = useState("Deyvison");
  return (
    <div>
      <h1>Will this be displayed?</h1>
      {x && <p>If x is true , yes!</p>}
      {!x && <p>Now x is false</p>}
      <h1>Ternary operator</h1>
      {name === "John" ? (
        <div>
          <p>The name is John</p>
        </div>
      ) : (
        <div>
          <p>The name was not found</p>
        </div>
      )}
      <button onClick={() => setName("John")}>Click here</button>
    </div>
  );
}

export default ConditionalRender;

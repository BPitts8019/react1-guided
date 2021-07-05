import React, { useState } from "react";
import ReactDOM from "react-dom";

function Heading() {
   // const header = document.createElement("h1");
   // header.textContent = "Hello World!";

   // return header;
   // return React.createElement("h1", null, "Hello World!");
   return <h1>Hello World!</h1>;
}

function App() {
   const initialCount = 0;
   const [count, setCount] = useState(initialCount);

   // setTimeout(() => {
   //    setCount(20);
   //    console.log(`count: ${count}`);
   // }, 2000);

   return (
      <div>
         <Heading />
         <p>Current count: {count}</p>
         <button onClick={() => setCount(count + 1)}>Increment</button>
         <button onClick={() => setCount(count - 1)}>Decrement</button>
         <button onClick={() => setCount(initialCount)}>Reset</button>
      </div>
   );
}
const container = document.getElementById("root");
// container.appendChild(Header());
ReactDOM.render(<App />, container);

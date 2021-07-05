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
   const [count, setCount] = useState(0);

   setTimeout(() => {
      setCount(20);
      console.log(`count: ${count}`);
   }, 2000);

   return (
      <div>
         <Heading />
         <p>Current count: {count}</p>
      </div>
   );
}
const container = document.getElementById("root");
// container.appendChild(Header());
ReactDOM.render(<App />, container);

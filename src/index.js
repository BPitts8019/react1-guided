import React from "react";
import ReactDOM from "react-dom";

function Heading() {
   // const header = document.createElement("h1");
   // header.textContent = "Hello World!";

   // return header;
   // return React.createElement("h1", null, "Hello World!");
   return <h1>Hello World!</h1>;
}

function App() {
   return (
      <div>
         <Heading />
         <p>Welcome to our app</p>
      </div>
   );
}
const container = document.getElementById("root");
// container.appendChild(Header());
ReactDOM.render(<App />, container);

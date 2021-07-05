import React from "react";
import ReactDOM from "react-dom";

function Header() {
   // const header = document.createElement("h1");
   // header.textContent = "Hello World!";

   // return header;
   // return React.createElement("h1", null, "Hello World!");
   return <h1>Hello World!</h1>;
}

const container = document.getElementById("root");
// container.appendChild(Header());
ReactDOM.render(Header(), container);

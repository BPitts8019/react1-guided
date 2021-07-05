function Header() {
   const header = document.createElement("h1");
   header.textContent = "Hello World!";

   return header;
}

const container = document.getElementById("root");
container.appendChild(Header());

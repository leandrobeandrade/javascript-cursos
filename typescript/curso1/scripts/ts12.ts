let element1 = document.getElementById("btn");
console.log("Botão", element1);

let element2 = document.querySelector("#btn");
console.log("Botão", element2);

let element3 = document.getElementsByClassName("main");
console.log("Main", element3);

let element4 = document.querySelector(".main");
console.log("Main", element4);

let elements1 = document.querySelectorAll(".main");
console.log("Mains", elements1);

let elements2 = document.getElementsByTagName("div");
console.log("Divs", elements2);

let elements3 = document.getElementsByName("p");
console.log("Ps", elements3);

let el = element1 ||  document.createElement("btn")

el.onclick = () => {
  div.innerHTML = "Testando Typescript";
  div.insertBefore(novadiv, div.firstChild);
};

let div = document.getElementById("div") || document.createElement("div");

let novadiv = document.createElement("div");
novadiv.textContent = "Typescript + Javascript";
div.append(novadiv);

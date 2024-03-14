let text = "Lorem ipsum dolor sit amet";
const _text = "JavaScript";

console.log(text);
console.log("startsWith:", text.startsWith("rem"));
console.log("endsWith:", text.endsWith("ame"));
console.log("startsWith params:", text.startsWith("rem", 2));
console.log("endsWith params:", text.endsWith("ame", 25));
console.log("includes:", text.includes("Lorem"));
console.log("teste ".repeat(8));
console.log(Array.from(_text));

const drinks = ["Água", "Suco", "Sorvete"];
const lover = drinks
  .filter((drink) => drink === "Água")
  .map((drink) => `Eu amo ${drink}`);

console.log(lover);

let btn = document.createElement("button");
btn.textContent = "Teste";
document.body.appendChild(btn);

btn.addEventListener("click", () => {
  sandwich.make();
});

const sandwich = {
  bread: "Branco",
  cheese: "Cheddar",

  prepare: function () {
    return `Eu quero um sanduíche com pão ${this.bread} e queijo ${this.cheese}!`;
  },

  make: function () {
    setTimeout(() => {
      console.log(this.prepare());
    }, 2000);
  },
};

const body = document.getElementsByTagName("body");
const teste = (body.innerHTML = body);

console.log(teste);

const nomes = ['Le', 'Ali', 'Ka']; 
const love = nomes
.filter(name => name === 'Le')
.map(name => `Eu amo ${name}`);

console.log(love); 

const sandwich = {
	bread: "Branco",
	cheese: "Cheddar",

	prepare: function(){
		return `Eu quero um sanduíche com pão ${this.bread} e queijo ${this.cheese}!`
	},

	make: function(){
		window.setTimeout(() => {
			console.log(this.prepare());
		}, 5000);
	}
};

const btn = document.getElementById('btn')
btn.addEventListener('click', function(){
	sandwich.make();
});

let text = 'Lorem ipsum dolor sit amet';
const texto = 'Leandro';
const body = document.getElementsByTagName('body');
const teste = body.innerHTML = body;

console.log(text.startsWith('rem', 2));
console.log(text.endsWith('ame', 25));
console.log(text.includes('Lorem'));
console.log('teste '.repeat(8));
console.log(Array.from(texto));
console.log(body);

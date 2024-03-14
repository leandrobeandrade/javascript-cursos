let front = ['react', 'vue', 'angular']; 
let back = ['python', 'ruby', 'nodejs'];

										 		// JAVASCRIPT
let fullStack_1 = [];
fullStack_1 = fullStack_1.concat(front);
fullStack_1.push('RxJS');
fullStack_1 = fullStack_1.concat(back);

 										 		// ECMASCRIPT	
let fullStack_2 = [...front, 'RxJS', ...back];
console.log(fullStack_2);
console.log([...'will']);
console.log(...front);

function makeSandwich(bread, cheese, sauce) {
	console.log(`Seu sanduíche com pão ${bread}, queijo ${cheese} and ${sauce} está feito!`);
}
const ingredients = ['white', 'cheddar', 'barbecue'];
makeSandwich(...ingredients);

function multiply(mult, ...args) {
	return args.map(arg => arg * mult);
}
console.log(multiply(5, 1, 2, 3, 4, 5, 6));

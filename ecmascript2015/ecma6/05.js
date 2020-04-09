let front = ['react', 'vue', 'angular']; 
let back = ['python', 'ruby', 'nodejs'];

//										 JAVASCRIPT
// let fullStack = [];
// fullStack = fullStack.concat(front);
// fullStack.push('RxJS');
// fullStack = fullStack.concat(back);
// 

// 										 ECMASCRIPT	
let fullStack = [...front, 'RxJS', ...back];
console.log(fullStack);
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

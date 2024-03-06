const data = [ 
	{
		name: 'Willian',
		age: 26,
		city: 'Dublin'
	},
	{
		name: 'Jonas',
		age: 22,
		city: 'Cologne'
	}
];


const sampleArray = [4, -5, 0, -1, 2];
const underZero = sampleArray.find(x => x > 0);
const underZeroIndex = sampleArray.findIndex(x => x < 0);
console.log(underZero);
console.log(underZeroIndex);

const jonas = data.find(person => person.name === 'Jonas');
const jonasIndex = data.findIndex(person => person.name === 'Jonas');
console.log(jonas);

const arr = new Array(50);
arr.fill('lol', 3, 6);
console.log(arr);

const newArr = [1,2,3,4,5,6];
newArr.fill('lol', 1, 3);
console.log(newArr);

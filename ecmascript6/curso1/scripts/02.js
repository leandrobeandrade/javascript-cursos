const list = document.querySelectorAll('#list li'); 
const listArray = Array.from(list);

console.log(listArray);

const nameC = listArray.map((name) => name.textContent);
const nameT = listArray.map((name) => name.tagName);

console.log(nameC, nameT);

const array = Array.of(1,10,"teste", {name:"Lea"}, [2,3,4]);
console.log(array);

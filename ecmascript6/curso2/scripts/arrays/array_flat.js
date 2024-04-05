let arr = [1, 2, 3, [4, 5, 6, [7, 8, [9]]]]
let flat1 = arr.flat()
let flat2 = arr.flat(3)

console.log(flat1)
console.log(flat2)
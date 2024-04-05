let nomes = ['Fulano, Silva', 'Ciclano, Sousa', 'Beltrano, Alves']

console.log(nomes)

let nomes_map = nomes.map(item => item.split(','))
console.log(nomes_map)

let nomes_flatmap = nomes.flatMap(item => item.split(','))
console.log(nomes_flatmap)
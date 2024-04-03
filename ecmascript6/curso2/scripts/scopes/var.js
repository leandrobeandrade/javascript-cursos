function escopoFuncao() {
  var serie = 'House of the Dragon'
  console.log('funcao: ', serie)
}

if (true) {
  if (true) {
    var serie = 'Game of Thrones'
  }
}

escopoFuncao()

console.log('global: ', serie)

{
  console.log('global: ', serie)
}

/*
  VAR
    - var dentro de blocos sofre hosting de blocos inferiores para window
    - var dentro de função fica limitada dentro do escopo da função
*/
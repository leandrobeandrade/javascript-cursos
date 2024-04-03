const SERIE = 'The Walking Dead'

function escopoFuncao() {
  console.log('funcao: ', SERIE)

  if (true) {
    if (true) {
      console.log('funcao: ', SERIE)
    }
  }
}

escopoFuncao()

console.log('global: ', SERIE)

{
  console.log('global: ', SERIE)
}

/*
  CONST
    - const pertence somente ao escopo de bloco inserido e escopo inferiores
    - const não pode ter o seu valor modificado
*/
let control = true
let prom = new Promise((resolve, reject) => {
  if (!control) reject('REJEITADO')

  resolve('RESOLVIDO')
})

prom
  .then(resultado => console.log(resultado))
  .catch(e => console.log(e))
  .finally(() => console.log('FINALIZADO!!!'))
  .then(() => console.log('Then depois do finally'))
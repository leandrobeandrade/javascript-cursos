let dados = [
  ['nome', 'Fulano'],
  ['nome', 'Ciclano'],
  ['profissional', [
    ['site', 'teste@mail.com'],
    ['profissão', 'programador']
  ]],
  ['hobbies', ['ouvir música', 'jogar futebol']],
  ['pais', 'Brasil']
]

console.log(dados)
console.log(Object.fromEntries(dados))
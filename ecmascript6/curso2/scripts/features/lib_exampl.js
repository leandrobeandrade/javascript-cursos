export const saudacao = () => {
  let data = new Date().toLocaleDateString()

  return `Olá, hoje é o dia ${data}`
}

export function getEndereco(cep) {
  return fetch(`https://viacep.com.br/ws/${cep}/json`)
    .then(resp => resp.json())
}

// poderiam estar em arquivos separados normalmente
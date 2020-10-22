# Type Utilities

Age como um interface que auxilia na construção, descrição e tipagem para objetos.

- **Readonly<>:** Congela o objeto, para não permitir modificação no objeto depois de setado pela 1° vez
- **Partial<>:** Deixa o objeto ou uma interface ser parcialmente implementada
- **Pick<>:** Pega apenas propriedades pré definidas dos objetos ou interfaces
- **Omit<>:** Omite a(s) propriedade(s) pré definidas dos objetos ou interfaces 

```
type Usuario = {
    nome: string;
    idade: number;
    homem: boolean;
}

const usuario: Usuario = {   
    nome: 'Fulano de Tal';
    idade: 36;
    homem: true;
}

usuario.homem = false;  // valor da propriedade modificado diretamente

__________________________

const usuario: Readonly<Usuario> = {   
    nome: 'Fulano de Tal';
    idade: 36;
    homem: true;
}

usuario.homem = false;  // erro
```

Para poder modificar objetos que sejam tipados como Readonly  o indicado é criar uma função que gere um novo objeto idêntico ao original e utilizar Partial:

```
function atualizarUsuario(usuario: Usuario, nvUsuario: Partial<Usuario>) {
    return { ...usuario, ...nvUsuario }  // (...) spread operator aqui pega cada propriedade no objeto
}

const usuario2 = autalizar(usuario, { homem = false })
```

Exemplo de uso de Pick<>:

```
type usu = Pick<Usuario, 'nome' | 'homem'>

const usuarioP: usu = {
    nome: 'Beltrano de Tal';
    homem: true;
}
```

Exemplo de uso de Omit<>:

```
type usuO = Omit<Usuario, 'idade'>

const usuario4: usu = {
    nome: 'Ciclano de Tal';
    homem: true;
}
```

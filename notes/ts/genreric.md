# Generic

Define um tipo de variável ou retorno de função como sendo unknow.

- **any:** aceita qualquer coisa em qualquer momento
- **unknow:** aceita qualquer coisa apenas na primeira definição de tipo, depois só aceita aquele tipo

Nomenclaturas padrões para nomes de generics.

- **T:** Type
- **S:** State
- **K:** Key
- **V:** Value
- **E:** Element

```
function definirEstado<S>() {
    let estado: S;

    function pegaEstado() {
        return estado;
    }

    function defineEstado(nvEstado: S) {
        estado = nvEstado;
    }

    return { pegaEstado, defineEstado };
}

const novoEstado = definirEstado<string>();

novoEstado.defineEstado('Olá Mundo');
console.log(novoEstado.pegaEstado());  // retorna "Olá mundo"

novoEstado.defineEstado(123);  // Já aponta erro
```

Também é possível fazer Union ou Type Alias nos tipos para aceitar mais de um tipo utilizando extends, assim também, como declarar um tipo default:

```
function definirEstado<S extends string | number>() { ...

const novoEstado = definirEstado<string>();

novoEstado.defineEstado('Olá Mundo');
console.log(novoEstado.pegaEstado());  // retorna "Olá mundo"

novoEstado.defineEstado(123);  // Já aponta erro

________________________________________________ extends

function definirEstado<S extends string | number>() {
...

const novoEstado = definirEstado<number>();

novoEstado.defineEstado('Olá Mundo');
console.log(novoEstado.pegaEstado());  // Já aponta erro

novoEstado.defineEstado(123);  // retorna 123

________________________________________________ type alias

type strNum = string | number;

function definirEstado<S extends strNum>() { ...

________________________________________________ default

type strNum = string | number;

function definirEstado<S extends strNum = string>() {
...

novoEstado.defineEstado('Olá Mundo');
console.log(novoEstado.pegaEstado());  // retorna "Olá mundo"

novoEstado.defineEstado(123);  // Já aponta erro
```

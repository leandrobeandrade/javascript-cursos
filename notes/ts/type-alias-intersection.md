# Type Alias - Intersection
Utilizado como uma interface na construção de objetos.

    type user = {
        id: number;
        nome: string;
        email?: string; // ? marca como opcional
    }

    const user1: user = {
        id: 1,
        nome: 'Fulano'
    } 

 &nbsp;

    type info = {
        sobrenome: string;
        masculino: boolean;
    }

    const info1: info = {
        sobrenome: 'Beltrano',
        masculino: true
    }

&nbsp;

    type all = user & info;

    const alls: all = {
        id: 2,
        nome: 'Ciclano',
        sobrenome: 'Belciclano',
        masculino: false
    }
---
    const arrays: People = [
      {
        name: 'Fulano',
        maried: true,
        height: 1.75
      },
      {
        name: 'Ciclano',
        maried: false,
        height: 2.00
      }
    ]
    
    function peoples(p: People) {
      p.forEach(person => {
        console.log(person);
      });
    }
    
    type Person = { name: string, maried: boolean };
    type PersonWithHeight = Person & { height: number };
    type People = PersonWithHeight[];
    
    peoples(arrays);

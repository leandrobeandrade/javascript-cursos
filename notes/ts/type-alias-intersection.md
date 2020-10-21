# Type Alias - Intersection
Utilizado com uma interface na construção de objetos.

    type user = {
        id: number;
        nome: string;
        email?: string; // ? marca como opcional
    }

    const user1: user = {
        id: 1,
        nome: 'Fulano'
    } 

---

    type info = {
        sobrenome: string;
        masculino: boolean;
    }

    const info1: info = {
        sobrenome: 'Beltrano',
        masculino: true
    }

---

    type all = user & info;

    const alls: all = {
        id: 2,
        nome: 'Ciclana',
        sobrenome: 'Belciclano',
        masculino: false
    }

# Type Alias
Utilizado quando se quer utilizar um padrão de tipos em comum.

      type Uid = string | number;
      let dados: object;

      function products(uid: Uid, name: string) { 
          return dados: { uid: uid, name: name }
      }

      function users(uid: Uid, name: string) { 
          return dados: { uid: _uid, name: name }
      }

      products(123, 'sapatos');   // OK
      users('123', 'Fulano');     // OK
   
---

      type Teams = 'Bulls' | 'Lakers' | 'Pistons';

      function teams(teams: Teams) {
          return teams;
      }

      teams('Jazz');    // ERRO
      teams('Lakers');  // OK

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

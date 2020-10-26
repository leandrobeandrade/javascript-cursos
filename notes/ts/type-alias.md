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
      items('123', 'Fulano');     // OK
   
---   

      type Teams = 'Bulls' | 'Lakers' | 'Pistons';

      function teams(teams: Teams) {
          return teams;
      }

      teams('Jazz');    // ERRO
      teams('Lakers');  // OK
      edededed

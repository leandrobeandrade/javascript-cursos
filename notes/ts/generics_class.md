    class Car {
      public color: string;
      public brand: string;
    
      constructor(color: string, brand: string) {
        this.color = color;
        this.brand = brand;
      }
    }
    
    class Byke {
      public color: string;
      public brand: string;
    
      constructor(color: string, brand: string) {
        this.color = color;
        this.brand = brand;
      }
    }
    
    function makeVeychle<T>(vey: T) {
      return vey;
    }
    
    let car = new Car('azul', 'Ford');
    let myCar = makeVeychle(car);
    
    let byke = new Byke('verde', 'Caloi');
    let myByke = makeVeychle(byke);
    
    console.log(`Meu carro é ${myCar.color} da marca ${myCar.brand}`);     \\ Meu carro é azul da marca Ford
    console.log(`Minha byke é ${myByke.color} da marca ${myByke.brand}`);  \\ Minha byke é verde da marca Caloi

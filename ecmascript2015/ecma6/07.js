 // class 
 function Animal(kind, sound) {
    // constructor
    this.kind = kind;
    this.sound = sound;
}

// method
Animal.prototype.hello = function() {
    console.log(`${this.sound} I'm a ${this.kind}!`);
}
const dog = new Animal('dog', 'auau');
const cat = new Animal('cat', 'meow');

class Animals {
    constructor(kind, sound) {
        this.kind = kind;
        this.sound = sound;
    }
    hello() {
        console.log(`${this.sound} I'm a ${this.kind}!`);
    }
    static info() {
        console.log('This is a class to create animals!');
    }
    get name() {
        console.log(`${this.sound} My name is Jake!`);
    }
    set nickname(nick) {
        this.nick = nick;
    }
}
const cao = new Animals('cao', 'auau');
const gato = new Animals('gato', 'meow');

console.log(cao);
console.log(gato)

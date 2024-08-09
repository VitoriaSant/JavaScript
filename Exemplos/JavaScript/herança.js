class Aninal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    speak () {
        console.log(`${this.nome} está falando...`);
    }
}

class Cachorro extends Aninal {
    constructor(nome, idade) {
        super(nome, idade);
    }
}

const animal = new Aninal("Simba");
const dog = new Cachorro("Bob");

animal.speak(); 
dog.speak(); 

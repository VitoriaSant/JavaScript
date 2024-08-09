class Pessoa {
    constructor(nome, sobrenome, idade, endereco) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.endereco = endereco;
    }

    //Nao pode ser static pois utiliza dados da pessoa e precisa ser instanciado
    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }

    // Como nao utiliza dados de pessoa pode ser static e nao precisa ser instanciado
    static speak(){
        console.log("Seja bem vindo");
    }

}

const pessoa = new Pessoa(Vitoria, Santos, 40);


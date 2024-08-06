const soma = 1 + 2;

// Conditional (If, Else If, Else)
if (soma === 2) {
    console.log('A soma é igual a 2!');
}else if (soma === 3){
    console.log('A soma é igual a 3!');
}else {
    console.log('Soma não enocontrado');
}



// Ternary Operator
// Se soma for igual a 2 retorna true se nao retorna false
let numero = soma === 2 ? true : false;



const carros = "Tesla";

// Switch Case
switch (carros) {
    case "Ferrari":
        console.log("Esse é um carro luxo");
        break;
    case "Tesla":
        console.log("Esse é um carro de energia renovável");
        break;
    case "Mercedes":
        console.log("Esse é um carro familia");
        break;
    default:
        console.log("Carro não encontrado");
}
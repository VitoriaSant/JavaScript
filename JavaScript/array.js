const options = [nome, 10, false, 3.14];

//Adciona no final do array
options.push("Joao");

//Adciona no inicio do array
options.unshift("Joao");

//Deleta do inicio do array
options.shift();

//Deleta do final do array
options.pop();

//Adciona o valor 'Joao' ao array na posiçao 2  
options[2] = "Joao";

//valorIndex recebera a posiçao que o nome se encontra
const valorIndex = options.indexOf("nome");

// ordena em ordem alfabetica
const ordenarArray = options.sort();

// Identifica se é ou nao um arrey
const validaArray = Array.isArray(options);



//MAP 
const numeros =[1, 2, 3, 4];

const multiplicandoPorDois = numeros.map(function (n) {
    return n * 2;
});



//FILTER - para filtrar
const idades =[22, 65, 31, 12, 18, 14];

const maioresDeIdade = idades.filter(function (idade) {
    return idade >= 18;
});




//REDUCE - para reduzir a um elemento 
const soma =[1, 2, 3, 4]

const somaNumeros = soma.reduce(function (n, somaDeN){
    return somaDeN + n
}, 0);
const carros =["Ferrari", "Tesla","Mercedes"]

//For com contador
//Basica
for (let i = 0; i < carros.length ; i++) {
    console.log(carros[i]);
}

//For com iterator
//Simplificada
for (let carros of carros) {
    console.log(carros);
}

// For com função
// Tem como parametro o index tambem diferente do "Simplificado"
carros.forEach(function(carro, i) {
    console.log(i);
    console.log(carro);
});



//While
let index = 0;

while (index < 10) {	
    console.log(index);
    index++;
}
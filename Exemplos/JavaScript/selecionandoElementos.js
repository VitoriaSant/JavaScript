// Selecionar apenas um unico elemento 
const nVariavel = document.getElementById("nID");
const nVariavel2 = document.querySelector(".nID");

// Selecionar multiplos os elementos

// Retorna um array --- melhor a ser usado
const allElements = document.querySelectorAll(".nID");

// Retorna uma colecao de dados --- nao é bom para manipular os dados
const allElements2 = document.getElementsByClassName("nID");
const allElements3 = document.getElementsByTagName("nID");
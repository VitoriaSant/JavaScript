const items = document.querySelector(".item");
const button = document.querySelector(".button");

// Remover itens
//Remove tudo
items.remove();	
// Remove primeiro e ultimo item
items.firstElementChild();
items.lastElementChild();

//Altera um testo de um item selecinado
items.children[0].textContent = "Nova mensagem";

//Altera o HTML e o texto do item
items.firstElementChild.innerHTML = "<h1> Nova mensagem</h1>";

// muda o stilo
button.style.background = "nova cor";

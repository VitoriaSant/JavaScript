const pessoa ={
    nome: 'John Doe',
    idade: 30,
    endereco: {
        rua: 'Rua dos Bobos',
        numero: 123,
        cidade: 'Cidade do Mundo'
    }
}

const todos =[
    {
    id: 1,
    nome: 'Alice Johnson',
    idade: 25,
    },
    {
    id: 2,
    nome: 'Bob Johnson',
    idade: 28,
    },
];


//transoforma array em json
const todosJSON = JSON.stringify(todos);

//transoforma json em dados javascript 
const todosArray = JSON.parse(todosJSON);
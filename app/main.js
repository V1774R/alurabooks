const divLivros = document.querySelector('#livros');
const  valor_total_livros_disponiveis = document.querySelector('#valor_total_livros_disponiveis');


let livros = [];
let livrosComDesconto = [];
const API = "https://guilhermeonrails.github.io/casadocodigo/livros.json";
getLivros();

async function getLivros(){
    const res = await fetch(API);
    const livros = await res.json();
    //console.table(livros);
    livrosComDesconto = aplicarDesconto(livros, 30);
    mostarLivros(livrosComDesconto);
}


const btnOrdenarPorPreco = document.querySelector('#btnOrdenarPorPreco');

function ordenarPorPreco(listaDeLivros){
    let livrosOrdenados = listaDeLivros.sort((a, b) => a.preco - b.preco);
    mostarLivros(livrosOrdenados);
}
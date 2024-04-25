function somarValoresDosLivrosDisponiveis(listaDeLivros){
    return listaDeLivros.reduce((acumulador, atual) => acumulador + atual.preco, 0);
}
function exibirTotalLivros(total){
    const valorSomaLivros = document.querySelector('#valor');
    valorSomaLivros.innerHTML = total.toFixed(2).replace('.', ',');
}
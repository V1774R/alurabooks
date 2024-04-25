//Essa função recebe uma lista de livros e um
//  valor para ser o percentual de desconto aplicado em cada livro.
function aplicarDesconto(listaDeLivros, percentualDesconto){
    const desconto = percentualDesconto/100;
    const copia = listaDeLivros.map((livro)=>{
        return {...livro, preco: livro.preco - livro.preco*desconto}
    })
    return copia;
}
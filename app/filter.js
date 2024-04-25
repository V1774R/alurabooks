const botoes = document.querySelectorAll(".btn");
const btnLivrosDisponiveis = document.querySelector('#btnLivrosDisponiveis');

botoes.forEach(botao=>{
    botao.addEventListener('click', ()=>{
        const filtro = botao.value;
        if(filtro == 'disponiveis'){
            valor_total_livros_disponiveis.innerHTML = `
            <div class="livros__disponiveis">
                <p>Todos os livros disponíveis por R$ <span id="valor"></span></p>
            </div>
            `;
        }else{
            valor_total_livros_disponiveis.innerHTML = '';
        }
        filtar(filtro);
    })
})

function filtar(filtro){
    if(!filtro){
        console.log('ERRO! Solicitação inválida.');
    }else{
        if(filtro == 'disponiveis'){
            const copia = livrosComDesconto.filter((objetoDaVez) => objetoDaVez.quantidade > 0);
            let somaLivrosDisponiveis = somarValoresDosLivrosDisponiveis(copia);
            exibirTotalLivros(somaLivrosDisponiveis);
            mostarLivros(copia);
        }else if(filtro == 'preco'){
            ordenarPorPreco(livrosComDesconto);
        }else{
            const resultado = livrosComDesconto.filter((livro)=> (livro.categoria == filtro) );
            mostarLivros(resultado);
        }        


    }
    
}

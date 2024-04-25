function mostarLivros(listaDeLivros){
    divLivros.innerHTML = '';
    listaDeLivros.forEach((obj) => {
        let disponibilidade = obj.quantidade > 0 ? 'disponivel' : 'indisponivel';
        divLivros.innerHTML += `
            <div class="livro">
                <img class="livro__imagens ${disponibilidade}" src="${obj.imagem}"
                alt="${obj.alt}" />
                <h2 class="livro__titulo">
                ${obj.titulo}
                </h2>
                 <p class="livro__descricao">${obj.autor}</p>
                 <p class="livro__preco" id="preco">R$${obj.preco.toFixed(2).replace('.', ',')}</p>
                <div class="tags">
                <span class="tag">${obj.categoria}</span>
            </div>
            </div>         
        `;
    })
}

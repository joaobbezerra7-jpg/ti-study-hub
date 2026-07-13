import { produtos } from "../js/lista_produto.js";

const sectionCards = document.querySelector("#cards");
const inputPesquisa = document.querySelector("#input-pesquisa");

// ===============================
// Cria um card
// ===============================

function criarCard(produto) {

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}">

        <h3>${produto.nome}</h3>

        <p class="descricao">
            ${produto.anime}
        </p>

        <h2>
            R$ ${produto.preco.toFixed(2).replace(".", ",")}
        </h2>

        <button class="btn-add" data-id="${produto.id}">
            Adicionar
        </button>
    `;

    return card;
}

// ===============================
// Lista os produtos
// ===============================

function listarProdutos(listaProdutos) {

    sectionCards.innerHTML = "";

    listaProdutos.forEach(produto => {

        const card = criarCard(produto);

        sectionCards.appendChild(card);

    });

}

// ===============================
// Pesquisa
// ===============================

function pesquisarProdutos() {

    const texto = inputPesquisa.value.toLowerCase().trim();

    const resultado = produtos.filter(produto =>

        produto.nome.toLowerCase().includes(texto) ||

        produto.anime.toLowerCase().includes(texto)

    );

    listarProdutos(resultado);

}

// ===============================
// Eventos
// ===============================

inputPesquisa.addEventListener("input", pesquisarProdutos);

// ===============================
// Inicialização
// ===============================

listarProdutos(produtos);
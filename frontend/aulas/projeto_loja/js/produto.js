import { produtos } from "../js/lista_produto.js";

const cards = document.querySelector("#cards");
const inputPesquisa = document.querySelector("#input-pesquisa");
const categorias = document.querySelectorAll("#menu-secoes a");

// =========================
// Estado dos filtros
// =========================

const filtros = {
    pesquisa: "",
    anime: "Todos"
};

// =========================
// Renderizar produtos
// =========================

function mostrarProdutos(lista) {

    cards.innerHTML = "";

    if (lista.length === 0) {

        cards.innerHTML = "<h2>Nenhum produto encontrado.</h2>";
        return;

    }

    lista.forEach(produto => {

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">

            <h3>${produto.nome}</h3>

            <p>${produto.anime}</p>

            <h2>
                R$ ${produto.preco.toFixed(2).replace(".", ",")}
            </h2>

            <button
                class="btn-add"
                data-id="${produto.id}">
                Adicionar
            </button>
        `;

        cards.appendChild(card);

        // Evento do botão

        const botao = card.querySelector(".btn-add");

        botao.addEventListener("click", () => {

            adicionarAoCarrinho(produto.id);

        });

    });

}

// =========================
// Aplicar filtros
// =========================

function aplicarFiltros() {

    let resultado = [...produtos];

    // Pesquisa

    if (filtros.pesquisa !== "") {

        resultado = resultado.filter(produto =>

            produto.nome
                .toLowerCase()
                .includes(filtros.pesquisa.toLowerCase())

        );

    }

    // Categoria

    if (filtros.anime !== "Todos") {

        resultado = resultado.filter(produto =>

            produto.anime === filtros.anime

        );

    }

    mostrarProdutos(resultado);

}

// =========================
// Adicionar ao carrinho
// =========================

function adicionarAoCarrinho(idProduto) {

    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    const produtoExistente = carrinho.find(

        item => item.id === idProduto

    );

    if (produtoExistente) {

        produtoExistente.quantidade++;

    } else {

        carrinho.push({

            id: idProduto,

            quantidade: 1

        });

    }

    localStorage.setItem(

        "carrinho",

        JSON.stringify(carrinho)

    );

   

}

// =========================
// Pesquisa
// =========================

inputPesquisa.addEventListener("input", (event) => {

    filtros.pesquisa = event.target.value;

    aplicarFiltros();

});

// =========================
// Categorias
// =========================

categorias.forEach(link => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        filtros.anime = link.dataset.anime;

        aplicarFiltros();

    });

});

// =========================
// Inicialização
// =========================

mostrarProdutos(produtos);
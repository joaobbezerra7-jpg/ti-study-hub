import { produtos } from "./lista_produto.js";

const listaCarrinho = document.querySelector("#itens-carrinho");

const valorProdutos = document.querySelector("#valor-produtos");

const valorTotal = document.querySelector("#valor-total");

// =========================
// Carrinho
// =========================

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

// =========================
// Salvar
// =========================

function salvarCarrinho() {

    localStorage.setItem(

        "carrinho",

        JSON.stringify(carrinho)

    );

}

// =========================
// Renderizar
// =========================

function renderizarCarrinho() {

    listaCarrinho.innerHTML = "";

    if (carrinho.length === 0) {

        listaCarrinho.innerHTML = `

            <h2>

                Seu carrinho está vazio.

            </h2>

        `;

        valorProdutos.textContent = "R$ 0,00";

        valorTotal.textContent = "R$ 0,00";

        return;

    }

    let total = 0;

    carrinho.forEach(item => {

        const produto = produtos.find(

            p => p.id === item.id

        );

        if (!produto) return;

        const subtotal = produto.preco * item.quantidade;

        total += subtotal;

        const article = document.createElement("article");

        article.className = "item";

        article.innerHTML = `

            <img src="${produto.imagem}" alt="${produto.nome}">

            <div class="info">

                <h3>${produto.nome}</h3>

                <p>${produto.anime}</p>

                <span>

                    R$ ${produto.preco.toFixed(2).replace(".", ",")}

                </span>

            </div>

            <div class="quantidade">

                <button class="menos">

                    -

                </button>

                <span>

                    ${item.quantidade}

                </span>

                <button class="mais">

                    +

                </button>

            </div>

            <div class="subtotal">

                <strong>

                    R$ ${subtotal.toFixed(2).replace(".", ",")}

                </strong>

                <button class="remover">

                    Remover

                </button>

            </div>

        `;

        // botão +

        article.querySelector(".mais")

        .addEventListener("click", () => {

            item.quantidade++;

            salvarCarrinho();

            renderizarCarrinho();

        });

        // botão -

        article.querySelector(".menos")

        .addEventListener("click", () => {

            if (item.quantidade > 1) {

                item.quantidade--;

            } else {

                carrinho = carrinho.filter(

                    p => p.id !== item.id

                );

            }

            salvarCarrinho();

            renderizarCarrinho();

        });

        // remover

        article.querySelector(".remover")

        .addEventListener("click", () => {

            carrinho = carrinho.filter(

                p => p.id !== item.id

            );

            salvarCarrinho();

            renderizarCarrinho();

        });

        listaCarrinho.appendChild(article);

    });

    valorProdutos.textContent =

        `R$ ${total.toFixed(2).replace(".", ",")}`;

    valorTotal.textContent =

        `R$ ${total.toFixed(2).replace(".", ",")}`;

}

// =========================

renderizarCarrinho();
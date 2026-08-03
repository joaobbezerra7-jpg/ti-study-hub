// ---------- Estado da aplicação ----------
let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

// ---------- Elementos ----------
const form = document.getElementById("formTarefa");
const colAberto = document.getElementById("col-aberto");
const colAndamento = document.getElementById("col-andamento");
const colFinalizada = document.getElementById("col-finalizada");

// ---------- Utilitários ----------
function salvar() {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function formatarData(dataISO) {
  if (!dataISO) return "";
  const [ano, mes, dia] = dataISO.split("-");
  return `${dia}/${mes}/${ano}`;
}

function classePrioridade(prioridade) {
  if (prioridade === "Baixa") return "prioridade-baixa";
  if (prioridade === "Média") return "prioridade-media";
  return "prioridade-alta";
}

// ---------- Criação do card ----------
function criarCard(tarefa) {
  const card = document.createElement("div");
  card.className = `card ${classePrioridade(tarefa.prioridade)}`;
  card.dataset.id = tarefa.id;

  let linksAcao = "";
  if (tarefa.status === "aberto") {
    linksAcao = `
      <a data-acao="andamento">Em Andamento</a>
      <a data-acao="finalizar">Finalizar</a>
    `;
  } else if (tarefa.status === "andamento") {
    linksAcao = `
      <a data-acao="reabrir">Reabrir</a>
      <a data-acao="finalizar">Finalizar</a>
    `;
  } else if (tarefa.status === "finalizada") {
    linksAcao = `
      <a data-acao="reabrir">Reabrir</a>
      <a data-acao="andamento">Em Andamento</a>
    `;
  }

  card.innerHTML = `
    <h3>${tarefa.titulo}</h3>
    <h2>${tarefa.responsavel}</h2>
    <p>${tarefa.descricao}</p>
    <h2>DATA ENTREGA TAREFA: ${formatarData(tarefa.data)}</h2>
    <h2 class="texto-prioridade ${classePrioridade(tarefa.prioridade)}">${tarefa.prioridade.toUpperCase()}</h2>
    <div class="card-links">${linksAcao}</div>
    <div class="card-remover"><a data-acao="remover">Remover</a></div>
  `;

  return card;
}

// ---------- Renderização ----------
function renderizar() {
  colAberto.innerHTML = "";
  colAndamento.innerHTML = "";
  colFinalizada.innerHTML = "";

  const abertas = tarefas.filter(t => t.status === "aberto");
  const andamento = tarefas.filter(t => t.status === "andamento");
  const finalizadas = tarefas.filter(t => t.status === "finalizada");

  if (abertas.length === 0) colAberto.innerHTML = `<p class="vazio">Nenhuma tarefa aberta</p>`;
  else abertas.forEach(t => colAberto.appendChild(criarCard(t)));

  if (andamento.length === 0) colAndamento.innerHTML = `<p class="vazio">Nenhuma tarefa em andamento</p>`;
  else andamento.forEach(t => colAndamento.appendChild(criarCard(t)));

  if (finalizadas.length === 0) colFinalizada.innerHTML = `<p class="vazio">Nenhuma tarefa finalizada</p>`;
  else finalizadas.forEach(t => colFinalizada.appendChild(criarCard(t)));

  atualizarContadores();
  salvar();
}

// ---------- Contadores ----------
function atualizarContadores() {
  document.getElementById("qtdAberto").textContent = tarefas.filter(t => t.status === "aberto").length;
  document.getElementById("qtdAndamento").textContent = tarefas.filter(t => t.status === "andamento").length;
  document.getElementById("qtdFinalizada").textContent = tarefas.filter(t => t.status === "finalizada").length;

  document.getElementById("qtdBaixa").textContent = tarefas.filter(t => t.prioridade === "Baixa").length;
  document.getElementById("qtdMedia").textContent = tarefas.filter(t => t.prioridade === "Média").length;
  document.getElementById("qtdAlta").textContent = tarefas.filter(t => t.prioridade === "Alta").length;
}

// ---------- Adicionar tarefa ----------
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const titulo = document.getElementById("tarefa").value.trim();
  const responsavel = document.getElementById("responsavel").value.trim();
  const descricao = document.getElementById("descricao").value.trim();
  const prioridade = document.querySelector('input[name="prioridade"]:checked').value;
  const data = document.getElementById("dataTarefa").value;

  const novaTarefa = {
    id: Date.now(),
    titulo,
    responsavel,
    descricao,
    prioridade,
    data,
    status: "aberto" // toda tarefa nova entra automaticamente como aberta
  };

  tarefas.push(novaTarefa);
  renderizar();
  form.reset();
});

// ---------- Ações nos cards (delegação de eventos) ----------
document.querySelectorAll(".lista-cards").forEach(lista => {
  lista.addEventListener("click", function (e) {
    const alvo = e.target;
    if (alvo.tagName !== "A") return;

    const card = alvo.closest(".card");
    const id = Number(card.dataset.id);
    const tarefa = tarefas.find(t => t.id === id);
    if (!tarefa) return;

    const acao = alvo.dataset.acao;

    if (acao === "andamento") tarefa.status = "andamento";
    else if (acao === "finalizar") tarefa.status = "finalizada";
    else if (acao === "reabrir") tarefa.status = "aberto";
    else if (acao === "remover") tarefas = tarefas.filter(t => t.id !== id);

    renderizar();
  });
});

// ---------- Inicialização ----------
renderizar();

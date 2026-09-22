// Simula o tempo que a internet levaria para responder (em milissegundos)
const simularRede = (ms = 300) => new Promise(resolve => setTimeout(resolve, ms));
const elCarregando = document.getElementById("carregando");
const elErro = document.getElementById("erro");
const corpoTabela = document.getElementById("corpo-tabela");
// REQUISITO 1: COLOQUE AQUI AS SUAS INICIAIS (exemplo: "LS" para Lucas Silva)
const MINHAS_INICIAIS = "GFM";

async function consultarEncomendas() {
  elCarregando.style.display = "block";
  elErro.style.display = "none";
  try {
    // Simula uma resposta rápida de rede
    await simularRede(300);
    // 1. Tenta pegar os dados salvos na memória do navegador
    let dadosSalvos = localStorage.getItem("banco_encomendas");
    // 2. Se a memória estiver vazia, busca do encomendas.json pela primeira vez
    if (!dadosSalvos) {
      const resposta = await fetch("encomendas.json");
      if (!resposta.ok) throw new Error("Erro ao ler o arquivo JSON");
      const dadosIniciais = await resposta.json();
      // Guarda no navegador em formato de texto JSON
      localStorage.setItem("banco_encomendas", JSON.stringify(dadosIniciais));
      dadosSalvos = JSON.stringify(dadosIniciais);
    }
    // 3. Converte o texto JSON de volta para uma lista de objetos no JavaScript
    const encomendas = JSON.parse(dadosSalvos);
    renderizarTabela(encomendas);
    atualizarIndicadores(encomendas);
  } catch (erro) {
    elErro.textContent = "Não foi possível carregar as encomendas.";
    elErro.style.display = "block";
    console.error(erro);
  } finally {
    elCarregando.style.display = "none";
  }
}

// REQUISITO 2: Função para calcular e atualizar os indicadores no DOM
function atualizarIndicadores(encomendas) {
  document.getElementById("total-encomendas").textContent = encomendas.length;
  document.getElementById("total-pendente").textContent = encomendas.filter(e => e.status === "PENDENTE").length;
  document.getElementById("total-transito").textContent = encomendas.filter(e => e.status === "EM_TRANSITO").length;
  document.getElementById("total-entregue").textContent = encomendas.filter(e => e.status === "ENTREGUE").length;
}

function renderizarTabela(encomendas) {
  corpoTabela.innerHTML = ""; // Limpa a tabela antes de redesenhar
  const fragmento = document.createDocumentFragment();

  encomendas.forEach(encomenda => {
    const linha = document.createElement("tr");

    // 1. Coluna Código
    const tdCodigo = document.createElement("td");
    tdCodigo.textContent = encomenda.codigoRastreio;

    // 2. Coluna Cliente
    const tdCliente = document.createElement("td");
    tdCliente.textContent = encomenda.clienteNome;

    // 3. Coluna Status com Seletor Interativo
    const tdStatus = document.createElement("td");
    const selectStatus = document.createElement("select");
    const opcoes = ["PENDENTE", "EM_TRANSITO", "ENTREGUE"];

    opcoes.forEach(opcao => {
      const opt = document.createElement("option");
      opt.value = opcao;
      opt.textContent = opcao.replace("_", " ");
      if (opcao === encomenda.status) opt.selected = true;
      selectStatus.appendChild(opt);
    });

    // Quando o usuário escolhe outra opção, atualiza automaticamente!
    selectStatus.addEventListener("change", (e) => {
      atualizarStatus(encomenda.codigoRastreio, e.target.value);
    });

    tdStatus.appendChild(selectStatus);

    // 4. Coluna Ações com Botão de Excluir
    const tdAcoes = document.createElement("td");
    const btnExcluir = document.createElement("button");
    btnExcluir.textContent = "🗑️ Excluir";

    btnExcluir.addEventListener("click", () => {
      excluirEncomenda(encomenda.codigoRastreio);
    });

    tdAcoes.appendChild(btnExcluir);

    // Monta as 4 colunas na linha
    linha.appendChild(tdCodigo);
    linha.appendChild(tdCliente);
    linha.appendChild(tdStatus);
    linha.appendChild(tdAcoes);

    fragmento.appendChild(linha);
  });

  corpoTabela.appendChild(fragmento);
}

consultarEncomendas(); // chama a função assim que a página carrega

// Seleciona o formulário oficial
const formEncomenda = document.getElementById("form-encomenda");

// ALTERADO (REQUISITO 1): Adicionada a validação das iniciais antes de salvar
formEncomenda.addEventListener("submit", async function(event) {
  event.preventDefault();

  const codigo = document.getElementById("input-codigo").value.trim();

  // Validação: Se não começar com suas iniciais em maiúsculo, exibe alerta e cancela
  if (!codigo.startsWith(MINHAS_INICIAIS)) {
    alert("Código inválido para este operador!");
    return; // Aborta sem salvar no localStorage
  }

  // Captura os valores digitados
  const novaEncomenda = {
    codigoRastreio: codigo,
    clienteNome: document.getElementById("input-cliente").value.trim(),
    status: document.getElementById("select-status").value
  };

  // Envia para a função de salvamento
  await cadastrarEncomenda(novaEncomenda);
});

async function cadastrarEncomenda(novaEncomenda) {
  const btnSubmit = document.querySelector("#form-encomenda button[type='submit']");
  try {
    // Feedback visual imediato: trava o botão enquanto salva
    btnSubmit.disabled = true;
    btnSubmit.textContent = "Cadastrando...";

    // Simula a espera do processamento (500ms)
    await simularRede(500);

    // 1. Pega as encomendas que já estão guardadas
    const encomendas = JSON.parse(localStorage.getItem("banco_encomendas")) || [];

    // 2. Adiciona o novo item na lista
    encomendas.push(novaEncomenda);

    // 3. Salva a lista atualizada de volta na memória
    localStorage.setItem("banco_encomendas", JSON.stringify(encomendas));

    // 4. A REGRA DE OURO (Fonte da Verdade): Chama a consulta para redesenhar a tela
    await consultarEncomendas();

    // 5. Limpa os campos do formulário
    document.getElementById("form-encomenda").reset();
  } catch (erro) {
    console.error("Erro ao salvar:", erro);
    alert("Ops! Ocorreu um erro ao salvar a encomenda.");
  } finally {
    // Restaura o botão ao normal, dando certo ou errado
    btnSubmit.disabled = false;
    btnSubmit.textContent = "Cadastrar Encomenda";
  }
}

// EXCLUIR ENCOMENDA
async function excluirEncomenda(codigo) {
  try {
    await simularRede(200);

    // 1. Pega a lista atual
    let encomendas = JSON.parse(localStorage.getItem("banco_encomendas")) || [];

    // 2. Filtra a lista, mantendo apenas quem NÃO TEM esse código
    encomendas = encomendas.filter(item => item.codigoRastreio !== codigo);

    // 3. Salva a nova lista sem o item deletado
    localStorage.setItem("banco_encomendas", JSON.stringify(encomendas));

    // 4. Redesenha a tabela
    await consultarEncomendas();
  } catch (erro) {
    console.error("Erro ao excluir:", erro);
    alert("Não foi possível excluir a encomenda.");
  }
}

// ATUALIZAR STATUS DA ENCOMENDA
async function atualizarStatus(codigo, novoStatus) {
  try {
    await simularRede(200);
    const encomendas = JSON.parse(localStorage.getItem("banco_encomendas")) || [];

    // Localiza o item pelo código de rastreio
    const itemEncontrado = encomendas.find(item => item.codigoRastreio === codigo);

    if (itemEncontrado) {
      itemEncontrado.status = novoStatus; // Altera o status
      localStorage.setItem("banco_encomendas", JSON.stringify(encomendas));
      await consultarEncomendas();
    }
  } catch (erro) {
    console.error("Erro ao atualizar status:", erro);
    alert("Falha ao atualizar o status.");
  }
}
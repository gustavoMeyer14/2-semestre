/**fale conosco */
function validaFaleConosco() {
    var nome=document.frmfaleconosco.txtnome.value;
    var expRegnome = /^[a-zA-ZÀ-ÿ\s]{3,50}$/;
    if (!expRegnome.test(nome)) {
        alert("Preencha o campo 'Nome completo'!");
        document.frmfaleconosco.txtnome.focus();
        return false;
    }

    var fone = document.frmfaleconosco.txtfone.value;
    var expRegfone = new RegExp("^[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$");
    if (!expRegfone.test(fone)) {
        alert("Preencha o campo 'Telefone' ou formato inválido!");
        document.frmfaleconosco.txtfone.focus();
        return false;
    }

    var email = document.frmfaleconosco.txtemail.value;
    var expRegemail = /^[\w.-]+@[\w-]+(\.[\w-]+)+$/;
    if (!expRegemail.test(email)) {
        alert("Preencha o campo 'Email' ou formato inválido!");
        document.frmfaleconosco.txtemail.focus();
        return false;
    }
    abreModal();
    return false;
}

function verificaMotivo(motivo) {
    var elemento = document.getElementById("opcaoProduto");
    if (motivo=="PR") {
        if (elemento.firstChild) return;
        var select = document.createElement("select");
        select.setAttribute("name", "selproduto");
        var option = document.createElement("option");
        option.setAttribute("value", " ");
        option.appendChild(document.createTextNode("Escolha"));
        select.appendChild(option);

        option = document.createElement("option");
        option.setAttribute("value", "AR");
        option.appendChild(document.createTextNode("Ar condicionado"));
        select.appendChild(option);

        option = document.createElement("option");
        option.setAttribute("value", "AQ");
        option.appendChild(document.createTextNode("Aquecedor"));
        select.appendChild(option);

        elemento.appendChild(select);

    }else {
        if (elemento.firstChild)
            elemento.removeChild(elemento.firstChild)
    }
}

function abreModal() {
    var f = document.frmfaleconosco;
    var data = f.txtdata_nascimento.value;
    if (data) {
        var p = data.split ("-");
        data = p[2] + "/" + p[1] + "/" + p[0];
    } else {
        data = "Não informada";
    }

    var motivo = f.selmotivo.options[f.selmotivo.selectedIndex].text;

    var dados = [
        ["Nome", f.txtnome.value],
        ["Telefone", f.txtfone.value],
        ["Email", f.txtemail.value],
        ["Data de nascimento", data],
        ["Motivo", motivo]
    ];

    var selProduto = document.querySelector("select[name='selproduto']");
    if (selProduto) {
        dados.push(["Produtos", selProduto.options[selProduto.selectedIndex].text]);
    }

    dados.push(["Comentário", f.txtcomentario.value || "Sem comentário"]);

    var lista = document.getElementById("listaDados");
    lista.innerHTML = "";
    dados.forEach(function (item) {
        var li = document.createElement("li")
        var strong = document.createElement("strong");
        strong.textContent = item[0] + ": ";
        li.appendChild(strong);
        li.appendChild(document.createTextNode(item[1]));
        lista.appendChild(li);
    });

    document.getElementById("modalDados").classList.add("aberto");
}

function fechaModal() {
    document.getElementById("modalDados").classList.remove("aberto");
}

function confirmaEnvio() {
    document.frmfaleconosco.submit();
}
/**newsletter */
function validaNewsletter() {
    // Referência direta ao formulário da newsletter pelo nome
    var f = document.frmnewsletter;

    // Captura o valor do nome do usuário
    var nome = f.txtnome.value;
    
    // Expressão regular: exije pelo menos duas palavras (nome + sobrenome)
    var expRegnome = /^[a-zA-ZÀ-ÿ]+(\s+[a-zA-ZÀ-ÿ]+)+$/;
    
    // Valida o nome removendo espaços extras nas pontas (.trim())
    if (!expRegnome.test(nome.trim())) {
        alert("Preencha o campo 'Nome completo' com nome e sobrenome!");
        f.txtnome.focus();
        return false;
    }

    // Captura o e-mail digitado
    var email = f.txtemail.value;
    
    // Expressão regular: valida a estrutura padrão de e-mail
    var expRegemail = /^[\w.-]+@[\w-]+(\.[\w-]+)+$/;
    if (!expRegemail.test(email)) {
        alert("Preencha o campo 'Email' com um formato válido!");
        f.txtemail.focus();
        return false;
    }

    // Busca todas as checkboxes de interesse que estão marcadas (:checked)
    var interesses = document.querySelectorAll("input[name='chkinteresse']:checked");
    
    // Verifica se nenhuma opção foi marcada
    if (interesses.length === 0) {
        alert("Selecione pelo menos um interesse!");
        var primeiroChk = document.querySelector("input[name='chkinteresse']");
        if (primeiroChk) primeiroChk.focus(); // Foca no primeiro checkbox
        return false;
    }

    // Se passou em todas as checagens, chama a função para abrir o modal de confirmação da newsletter
    abreModalNewsletter();
    return false; // Impede a submissão direta do formulário
}

/**
 * Prepara e exibe o modal com os dados preenchidos na Newsletter.
 */
function abreModalNewsletter() {
    var f = document.frmnewsletter;

    // Seleciona apenas os checkboxes marcados
    var marcados = document.querySelectorAll("input[name='chkinteresse']:checked");
    var listaInteresses = [];

    // Percorre cada elemento marcado e extrai seu valor para o array listaInteresses
    marcados.forEach(function(item) {
        listaInteresses.push(item.value);
    });

    // Cria a estrutura de dados formatada para exibição
    var dados = [
        ["Nome", f.txtnome.value],
        ["Email", f.txtemail.value],
        // Une todas as opções marcadas com vírgulas (Ex: "Ar condicionado, Aquecedor")
        ["Interesses", listaInteresses.join(", ")]
    ];

    // Pega o elemento <ul> dentro do modal da newsletter
    var lista = document.getElementById("listaDadosNewsletter");
    lista.innerHTML = ""; // Limpa dados anteriores

    // Cria e insere dinamicamente os elementos <li> na lista
    dados.forEach(function (item) {
        var li = document.createElement("li");
        var strong = document.createElement("strong");
        strong.textContent = item[0] + ": ";
        li.appendChild(strong);
        li.appendChild(document.createTextNode(item[1]));
        lista.appendChild(li);
    });

    // Torna o modal da newsletter visível adicionando a classe 'aberto'
    document.getElementById("modalNewsletter").classList.add("aberto");
}

/**
 * Oculta o modal da Newsletter.
 */
function fechaModalNewsletter() {
    // Remove a classe 'aberto' do modal da newsletter
    document.getElementById("modalNewsletter").classList.remove("aberto");
}

/**
 * Envia o formulário da Newsletter.
 */
function confirmaNewsletter() {
    // Submete o formulário da newsletter para o servidor
    document.frmnewsletter.submit();
}

/** Orçamento
    Aluno: Gustavo Francisco Meyer */

function validaOrcamento() {
    var f = document.frmorcamento;

    var nome = f.txtnome.value;
    var expRegnome = /^[a-zA-ZÀ-ÿ]+(\s+[a-zA-ZÀ-ÿ]+)+$/;
    if (!expRegnome.test(nome.trim())) {
        alert("Preencha o campo 'Nome completo' com nome e sobrenome!");
        f.txtnome.focus();
        return false;
    }

    var email = f.txtemail.value;
    var expRegemail = /^[\w.-]+@[\w-]+(\.[\w-]+)+$/;
    if (!expRegemail.test(email)) {
        alert("Preencha o campo 'Email' com um formato válido!");
        f.txtemail.focus();
        return false;
    }

    var cidade = f.txtcidade.value;
    var expRegcidade = /^[a-zA-ZÀ-ÿ]+$/;
    if (!expRegcidade.test(cidade)) {
        alert("Preencha o campo 'Cidade'!");
        f.txtcidade.focus();
        return false;
    }

    if (f.selproduto.value == ""){
        alert("Selecione uma opção!");
        f.selproduto.focus();
        return false;
    }

    if (f.numquantidade.value < 1){
        alert("Digite uma quantidade do produto selecionado!");
        f.numquantidade.focus();
        return false;
    }

    abreModalOrcamento();
    return false;
}

function abreModalOrcamento() {
    var f = document.frmorcamento;

    var dados = [
        ["Nome", f.txtnome.value],
        ["Email", f.txtemail.value],
        ["Cidade", f.txtcidade.value],
        ["Produto selecionado", f.selproduto.value],
        ["Quantidade", f.numquantidade.value],
    ];

    var lista = document.getElementById("listaDadosOrcamento");
    lista.innerHTML = "";

    dados.forEach(function (item) {
        var li = document.createElement("li");
        var strong = document.createElement("strong");
        strong.textContent = item[0] + ": ";
        li.appendChild(strong);
        li.appendChild(document.createTextNode(item[1]));
        lista.appendChild(li);
    });

    document.getElementById("modalOrcamento").classList.add("aberto");
}

function fechaModalOrcamento() {
    document.getElementById("modalOrcamento").classList.remove("aberto");
}

function confirmaOrcamento() {
    document.frmorcamento.submit();
}
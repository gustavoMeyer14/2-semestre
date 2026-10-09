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
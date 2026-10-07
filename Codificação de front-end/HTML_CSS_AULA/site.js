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
    return true;
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
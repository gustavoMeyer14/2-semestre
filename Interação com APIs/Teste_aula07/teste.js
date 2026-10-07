fetch("https://viacep.com.br/ws/89229350/json/")
    .then((resposta) => resposta.json())
    .then((dados) => console.log(dados))
    .catch((erro) => console.error("Erro na requisição:", erro));

async function buscarCep(cep) {
    try {
        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        if (!resposta.ok) {
            throw new Error(`Erro HTTP: ${resposta.status}`);
        }
        const dados = await resposta.json();
        console.log(dados);
    } catch (erro) {
        console.error("Não foi possível buscar o CEP: ", erro);
    }
}

buscarCep("89229350");
const data = document.getElementById("data");
const quantidade = document.getElementById("quantidade");
const unidade = document.getElementById("unidade");
const resultado = document.getElementById("resultado");

const botao = document.querySelector("button");

botao.addEventListener("click", calcular);

function calcular() {
    const valorData = data.value;
    const valorQuantidade = Number(quantidade.value);
    const valorUnidade = unidade.value;

    const [ano, mes, dia] = valorData.split("-");

    const novaData = new Date(ano, mes - 1, dia);

    if (valorUnidade === "dias") {
    novaData.setDate(novaData.getDate() + valorQuantidade);
    } else if (valorUnidade === "meses") {
        novaData.setMonth(novaData.getMonth() + valorQuantidade);
    } else if (valorUnidade === "anos") {
        novaData.setFullYear(novaData.getFullYear() + valorQuantidade);
    }

    resultado.textContent = novaData.toLocaleDateString("pt-BR");
}
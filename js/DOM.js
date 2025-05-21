const valorReal = document.getElementById("valorReal");//certo
const Moedas = document.getElementById("Moedas"); // certo
const resultado = document.getElementById("resultado"); //certo
const cotacao = { Euro: 6.40, Dolar: 5.67 } //certo

let valorConvertido = ""
let simbolo =""

function CalcularMoeda() {
    document.getElementById("resultado").value = resultado.toFixed(2);
}

    function Euro(valorReal, cotacao) {
        return resultado = (valorReal / cotacao.Euro).toFixed(2);
    }

    function Dolar(cotacao, valorReal) {

        return resultado = (valorReal / cotacao.Dolar).toFixed(2);
    }


if (Moedas == "Dolar") {
    simbolo = "U$";
    valorConvertido = Dolar;
}else (Moedas === "Euro"){
    simbolo = "€";
    valorConvertido = Euro;
}

resultado.textContent = `O valor é ${simbolo} ${valorConvertido}`;


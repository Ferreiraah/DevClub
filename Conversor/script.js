const botaoConversor = document.querySelector(".botao-conversor");

function conversorDevalores() {
  const inputParaConverter = document.querySelector(".valorAConverter").value;
  const moedaParaConverter = document.querySelector(".moeda-a-converter");
  const moedaConvertida = document.querySelector(".moeda-convertida");

  const todayDolar = 4.9;

  const valorConvertido = inputParaConverter / todayDolar;

  moedaParaConverter.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputParaConverter);

  moedaConvertida.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(valorConvertido);
}

botaoConversor.addEventListener("click", conversorDevalores);

const botaoConversor = document.querySelector(".botao-conversor");
const valoresConvertidos = document.querySelector(".valoresConvertidos");

function conversorDeValores() {
  const inputParaConverter = document.querySelector(".valorAConverter").value;
  const moedaParaConverter = document.querySelector(".moeda-a-converter");
  const moedaConvertida = document.querySelector(".moeda-convertida");

  console.log(valoresConvertidos.value);

  const todayDolar = 4.9;
  const todayEuro = 5.3;
  const todayLibra = 6.2;


  if (valoresConvertidos.value == "Dolar") {
    moedaConvertida.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputParaConverter / todayDolar);
  }

  if (valoresConvertidos.value == "Euro") {
    moedaConvertida.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputParaConverter / todayEuro);
  }

  if (valoresConvertidos.value == "Libra") {
    moedaConvertida.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputParaConverter / todayLibra);

}

  moedaParaConverter.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputParaConverter);
} 


function mudarIconeMoeda() {
  const nomeMoedaConvertida = document.getElementById("moeda-nome");
  const iconeDaMoedaConvertida = document.querySelector(".iconeMoeda");

  if (valoresConvertidos.value == "Dolar") {
    nomeMoedaConvertida.innerHTML = "Dolares";
    iconeDaMoedaConvertida.src = './assets/Dolar.png'
  }

  if (valoresConvertidos.value == "Euro") {
    nomeMoedaConvertida.innerHTML = "Euros";
    iconeDaMoedaConvertida.src = './assets/Euro.png'
  }

  if(valoresConvertidos.value == "Libra"){
    nomeMoedaConvertida.innerHTML = "Libras";
    iconeDaMoedaConvertida.src = './assets/Libra.png'
  }

  conversorDeValores()
  

}

 


valoresConvertidos.addEventListener("change", mudarIconeMoeda);
botaoConversor.addEventListener("click", conversorDeValores);

function sortear() {
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let de = parseInt(document.getElementById("de").value);
  let ate = parseInt(document.getElementById("ate").value);
  let numero;
  let sorteio = [];
  for (let i = 0; i < quantidade; i++) {
    numero = numeroAleatorioEntre(de, ate);
    while (sorteio.includes(numero)) {
      numeroAleatorioEntre(de, ate);
    }
    sorteio.push(numero);
  }
  //usado para modificar o elemento dentro do html
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteio}</label>`;
  console.log(sorteio);
}

function numeroAleatorioEntre(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function alteraStatusBotao() {
  let botao = document.getElementById("btn-reiniciar");
  if (botao.classList.contains("container__botao-desabilitado")) {
    botao.classList.remove("container__botao-desabilitado");
    botao.classList.add("container__botao");
  } else {
    botao.classList.remove("container__botao");
    botao.classList.add("container__botao-desabilitado");
  }
}

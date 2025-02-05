//atribui a função ao botão sortear;
function sortear() {
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let de = parseInt(document.getElementById("de").value);
  let ate = parseInt(document.getElementById("ate").value);
  if (ate <= de){
    alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
    return;

    // OU {resultado.innerHTML =`<label class="texto__paragrafo">Números sorteados: o input "'Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!'</label>`}
  }
  if (quantidade > (ate - de + 1  )) {
    alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
    return;
  }
  let sorteio = [];
  for (let i = 0; i < quantidade; i++) {
    let numero = numeroAleatorioEntre(de, ate);
    while (sorteio.includes(numero)) {
      numero = numeroAleatorioEntre(de, ate);
    }
    sorteio.push(numero);
  }
  //usado para modificar o elemento dentro do html;
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteio}</label>`;
  alterarStatusBotao()
  

}
//gera um numero aleatorio inteiro entre ("min,  max")
function numeroAleatorioEntre(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//retira o atributo desativado do botão;
function alterarStatusBotao () {
  let botao = document.getElementById("btn-reiniciar");
  if (botao.classList.contains("container__botao-desabilitado")) {
    botao.classList.remove("container__botao-desabilitado");
    botao.classList.add("container__botao");
  } else {
    botao.classList.remove("container__botao");
     botao.classList.add("container__botao-desabilitado");
  }
}
//atribuir a função do botão reiniciar;
function reiniciar() {
document.getElementById("quantidade").value = ""; 
document.getElementById("de").value = "";
document.getElementById("ate").value = "";
document.getElementById("resultado").innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
alterarStatusBotao();
}

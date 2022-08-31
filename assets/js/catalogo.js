var qtdItens = 0;
var valorTotal = 0;

var qtdCarrinho = document.getElementById('show-qtd');
var valorItens = document.getElementById('valor-total');
const carrinho = document.getElementById('pedidos');


// BOTÕES SECTION PLAYSTATION
const btnJogo1 = document.getElementById('btn-ps-1');
const btnJogo2 = document.getElementById('btn-ps-2');
const btnJogo3 = document.getElementById('btn-ps-3');
const btnJogo4 = document.getElementById('btn-ps-4');
const btnJogo5 = document.getElementById('btn-ps-5');
const btnJogo6 = document.getElementById('btn-ps-6');
const btnJogo7 = document.getElementById('btn-ps-7');
const btnJogo8 = document.getElementById('btn-ps-8');


// BOTÕES SECTION XBOX
const btnJogo9 = document.getElementById('btn-xbox-1');
const btnJogo10 = document.getElementById('btn-xbox-2');
const btnJogo11 = document.getElementById('btn-xbox-3');
const btnJogo12 = document.getElementById('btn-xbox-4');
const btnJogo13 = document.getElementById('btn-xbox-5');
const btnJogo14 = document.getElementById('btn-xbox-6');
const btnJogo15 = document.getElementById('btn-xbox-7');
const btnJogo16 = document.getElementById('btn-xbox-8');

// BOTÕES SECTION COMPUTADOR
const btnJogo17 = document.getElementById('btn-pc-1');
const btnJogo18 = document.getElementById('btn-pc-2');
const btnJogo19 = document.getElementById('btn-pc-3');
const btnJogo20 = document.getElementById('btn-pc-4');
const btnJogo21 = document.getElementById('btn-pc-5');
const btnJogo22 = document.getElementById('btn-pc-6');
const btnJogo23 = document.getElementById('btn-pc-7');
const btnJogo24 = document.getElementById('btn-pc-8');

// SECTION PLAYSTATION 

btnJogo1.addEventListener('click', () => {
  if(confirm('Deseja adicionar Item ao Carrinho?') == true) {
    const game1 = document.getElementById('name-game1').innerText;
    const priceGame1 = 221.59;
    qtdItens++;
    valorTotal += priceGame1;
    valorItens.innerHTML = `R$${valorTotal}`;  
    // Mostrar no Modal os itens e o valor
    qtdCarrinho.innerHTML = qtdItens;
    carrinho.innerHTML += `<p class="itens"> Jogo: ${game1} | Preço: <span class="valor">R$${priceGame1.toFixed(2)}</span></p>`;
  } else {
    alert('O item não foi adicionado!');
  }
})

btnJogo2.addEventListener('click', () => {
  if(confirm('Deseja adicionar Item ao Carrinho?') == true) {
    const game2 = document.getElementById('name-game2').innerText;
    const priceGame2 = 289.52;
    qtdItens++;
    valorTotal += priceGame2;
    valorItens.innerHTML = `R$${valorTotal}`; 
    // Mostrar no Modal os itens e o valor
    qtdCarrinho.innerHTML = qtdItens;
    carrinho.innerHTML += `<p class="itens"> Jogo: ${game2} | Preço: <span class="valor">R$${priceGame2.toFixed(2)}</span></p>`;
  } else {
    alert('O item não foi adicionado!');
  }
})

btnJogo3.addEventListener('click', () => {
  if(confirm('Deseja adicionar Item ao Carrinho?') == true) {
    const game3 = document.getElementById('name-game3').innerText;
    const priceGame3 = 299.99;
    qtdItens++;
    valorTotal += priceGame3;
    valorItens.innerHTML = `R$${valorTotal}`;  
    // Mostrar no Modal os itens e o valor
    qtdCarrinho.innerHTML = qtdItens;
    carrinho.innerHTML += `<p class="itens"> Jogo: ${game3} | Preço: <span class="valor">R$${priceGame3.toFixed(2)}</span></p>`;
  } else {
    alert('O item não foi adicionado!');
  }
})

btnJogo4.addEventListener('click', () => {
  if(confirm('Deseja adicionar Item ao Carrinho?') == true) {
    const game4 = document.getElementById('name-game4').innerText;
    const priceGame4 = 185.99;
    qtdItens++;
    valorTotal += priceGame4;
    valorItens.innerHTML = `R$${valorTotal}`;  
    // Mostrar no Modal os itens e o valor
    qtdCarrinho.innerHTML = qtdItens;
    carrinho.innerHTML += `<p class="itens"> Jogo: ${game4} | Preço: <span class="valor">R$${priceGame4.toFixed(2)}</span></p>`;
  } else {
    alert('O item não foi adicionado!');
  }
})

btnJogo5.addEventListener('click', () => {
  if(confirm('Deseja adicionar Item ao Carrinho?') == true) {
    const game5 = document.getElementById('name-game5').innerText;
    const priceGame5 = 155.00;
    qtdItens++;
    valorTotal += priceGame5;
    valorItens.innerHTML = `R$${valorTotal}`; 
    // Mostrar no Modal os itens e o valor
    qtdCarrinho.innerHTML = qtdItens;
    carrinho.innerHTML += `<p class="itens"> Jogo: ${game5} | Preço: <span class="valor">R$${priceGame5.toFixed(2)}</span></p>`;
  } else {
    alert('O item não foi adicionado!');
  }
})

btnJogo6.addEventListener('click', () => {
  if(confirm('Deseja adicionar Item ao Carrinho?') == true) {
    const game6 = document.getElementById('name-game6').innerText;
    const priceGame6 = 227.00;
    qtdItens++;
    valorTotal += priceGame6;
    valorItens.innerHTML = `R$${valorTotal}`;     
    // Mostrar no Modal os itens e o valor
    qtdCarrinho.innerHTML = qtdItens;
    carrinho.innerHTML += `<p class="itens"> Jogo: ${game6} | Preço: <span class="valor">R$${priceGame6.toFixed(2)}</span></p>`;
  } else {
    alert('O item não foi adicionado!');
  }
})

btnJogo7.addEventListener('click', () => {
  if(confirm('Deseja adicionar Item ao Carrinho?') == true) {
    const game7 = document.getElementById('name-game6').innerText;
    const priceGame7 = 200.00;
    qtdItens++;
    valorTotal += priceGame7;
    valorItens.innerHTML = `R$${valorTotal}`; 
    // Mostrar no Modal os itens e o valor
    qtdCarrinho.innerHTML = qtdItens;
    carrinho.innerHTML += `<p class="itens"> Jogo: ${game7} | Preço: <span class="valor">R$${priceGame7.toFixed(2)}</span></p>`;
  } else {
    alert('O item não foi adicionado!');
  }
})

btnJogo8.addEventListener('click', () => {
  if(confirm('Deseja adicionar Item ao Carrinho?') == true) {
    const game8 = document.getElementById('name-game6').innerText;
    const priceGame8 = 200.00;
    qtdItens++;
    valorTotal += priceGame8;
    valorItens.innerHTML = `R$${valorTotal}`;
    // Mostrar no Modal os itens e o valor
    qtdCarrinho.innerHTML = qtdItens;
    carrinho.innerHTML += `<p class="itens"> Jogo: ${game8} | Preço: <span class="valor">R$${priceGame8.toFixed(2)}</span></p>`;
  } else {
    alert('O item não foi adicionado!');
  }
})

// SECTION XBOX

btnJogo9.addEventListener('click', () => {
  if(confirm('Deseja adicionar Item ao Carrinho?') == true) {
    const game9 = document.getElementById('name-game9').innerText;
    const priceGame9 = 183.95;
    qtdItens++;
    valorTotal += priceGame9;
    valorItens.innerHTML = `R$${valorTotal}`;  
    // Mostrar no Modal os itens e o valor
    qtdCarrinho.innerHTML = qtdItens;
    carrinho.innerHTML += `<p class="itens"> Jogo: ${game9} | Preço: <span class="valor">R$${priceGame9.toFixed(2)}</span></p>`;
  } else {
    alert('O item não foi adicionado!');
  }
})

btnJogo10.addEventListener('click', () => {
  if(confirm('Deseja adicionar Item ao Carrinho?') == true) {
    const game10 = document.getElementById('name-game10').innerText;
    const priceGame10 = 299.99;
    qtdItens++;
    valorTotal += priceGame10;
    valorItens.innerHTML = `R$${valorTotal}`; 
    // Mostrar no Modal os itens e o valor
    qtdCarrinho.innerHTML = qtdItens;
    carrinho.innerHTML += `<p class="itens"> Jogo: ${game10} | Preço: <span class="valor">R$${priceGame10.toFixed(2)}</span></p>`;
  } else {
    alert('O item não foi adicionado!');
  }
})

btnJogo11.addEventListener('click', () => {
  if(confirm('Deseja adicionar Item ao Carrinho?') == true) {
    const game11 = document.getElementById('name-game11').innerText;
    const priceGame11 = 229.99;
    qtdItens++;
    valorTotal += priceGame11;
    valorItens.innerHTML = `R$${valorTotal}`; 
    // Mostrar no Modal os itens e o valor
    qtdCarrinho.innerHTML = qtdItens;
    carrinho.innerHTML += `<p class="itens"> Jogo: ${game11} | Preço: <span class="valor">R$${priceGame11.toFixed(2)}</span></p>`;
  } else {
    alert('O item não foi adicionado!');
  }
})

btnJogo12.addEventListener('click', () => {
  if(confirm('Deseja adicionar Item ao Carrinho?') == true) {
    const game12 = document.getElementById('name-game12').innerText;
    const priceGame12 = 299.99;
    qtdItens++;
    valorTotal += priceGame12;
    valorItens.innerHTML = `R$${valorTotal}`;   
    // Mostrar no Modal os itens e o valor
    qtdCarrinho.innerHTML = qtdItens;
    carrinho.innerHTML += `<p class="itens"> Jogo: ${game12} | Preço: <span class="valor">R$${priceGame12.toFixed(2)}</span></p>`;
  } else {
    alert('O item não foi adicionado!');
  }
})

btnJogo13.addEventListener('click', () => {
  if(confirm('Deseja adicionar Item ao Carrinho?') == true) {
    const game13 = document.getElementById('name-game13').innerText;
    const priceGame13 = 111.98;
    qtdItens++;
    valorTotal += priceGame13;
    valorItens.innerHTML = `R$${valorTotal}`;  
    // Mostrar no Modal os itens e o valor
    qtdCarrinho.innerHTML = qtdItens;
    carrinho.innerHTML += `<p class="itens"> Jogo: ${game13} | Preço: <span class="valor">R$${priceGame13.toFixed(2)}</span></p>`;
  } else {
    alert('O item não foi adicionado!');
  }
})

btnJogo14.addEventListener('click', () => {
  if(confirm('Deseja adicionar Item ao Carrinho?') == true) {
    const game14 = document.getElementById('name-game14').innerText;
    const priceGame14 = 244.95;
    qtdItens++;
    valorTotal += priceGame14;
    valorItens.innerHTML = `R$${valorTotal}`;
    // Mostrar no Modal os itens e o valor
    qtdCarrinho.innerHTML = qtdItens;
    carrinho.innerHTML += `<p class="itens"> Jogo: ${game14} | Preço: <span class="valor">R$${priceGame14.toFixed(2)}</span></p>`;
  } else {
    alert('O item não foi adicionado!');
  }
})

btnJogo15.addEventListener('click', () => {
  if(confirm('Deseja adicionar Item ao Carrinho?') == true) {
    const game15 = document.getElementById('name-game15').innerText;
    const priceGame15 = 249.95;
    qtdItens++;
    valorTotal += priceGame15;
    valorItens.innerHTML = `R$${valorTotal}`;   
    // Mostrar no Modal os itens e o valor
    qtdCarrinho.innerHTML = qtdItens;
    carrinho.innerHTML += `<p class="itens"> Jogo: ${game15} | Preço: <span class="valor">R$${priceGame15.toFixed(2)}</span></p>`;
  } else {
    alert('O item não foi adicionado!');
  }
})

btnJogo16.addEventListener('click', () => {
  if(confirm('Deseja adicionar Item ao Carrinho?') == true) {
    const game16 = document.getElementById('name-game16').innerText;
    const priceGame16 = 145.95;
    qtdItens++;
    valorTotal += priceGame16;
    valorItens.innerHTML = `R$${valorTotal}`; 
    // Mostrar no Modal os itens e o valor
    qtdCarrinho.innerHTML = qtdItens;
    carrinho.innerHTML += `<p class="itens"> Jogo: ${game16} | Preço: <span class="valor">R$${priceGame16.toFixed(2)}</span></p>`;
  } else {
    alert('O item não foi adicionado!');
  }
})

// SECTION COMPUTADOR

btnJogo17.addEventListener('click', () => {
  if(confirm('Deseja adicionar Item ao Carrinho?') == true) {
    const game17 = document.getElementById('name-game17').innerText;
    const priceGame17 = 129.95;
    qtdItens++;
    valorTotal += priceGame17;
    valorItens.innerHTML = `R$${valorTotal}`;  
    // Mostrar no Modal os itens e o valor
    qtdCarrinho.innerHTML = qtdItens;
    carrinho.innerHTML += `<p class="itens"> Jogo: ${game17} | Preço: <span class="valor">R$${priceGame17.toFixed(2)}</span></p>`;
  } else {
    alert('O item não foi adicionado!');
  }
})

btnJogo18.addEventListener('click', () => {
  if(confirm('Deseja adicionar Item ao Carrinho?') == true) {
    const game18 = document.getElementById('name-game18').innerText;
    const priceGame18 = 71.99;
    qtdItens++;
    valorTotal += priceGame18;
    valorItens.innerHTML = `R$${valorTotal}`;
    // Mostrar no Modal os itens e o valor
    qtdCarrinho.innerHTML = qtdItens;
    carrinho.innerHTML += `<p class="itens"> Jogo: ${game18} | Preço: <span class="valor">R$${priceGame18.toFixed(2)}</span></p>`;
  } else {
    alert('O item não foi adicionado!');
  }
})

btnJogo19.addEventListener('click', () => {
  if(confirm('Deseja adicionar Item ao Carrinho?') == true) {
    const game19 = document.getElementById('name-game19').innerText;
    const priceGame19 = 155.89;
    qtdItens++;
    valorTotal += priceGame19;
    valorItens.innerHTML = `R$${valorTotal}`; 
    // Mostrar no Modal os itens e o valor
    qtdCarrinho.innerHTML = qtdItens;
    carrinho.innerHTML += `<p class="itens"> Jogo: ${game19} | Preço: <span class="valor">R$${priceGame19.toFixed(2)}</span></p>`;
  } else {
    alert('O item não foi adicionado!');
  }
})

btnJogo20.addEventListener('click', () => {
  if(confirm('Deseja adicionar Item ao Carrinho?') == true) {
    const game20 = document.getElementById('name-game20').innerText;
    const priceGame20 = 155.89;
    qtdItens++;
    valorTotal += priceGame20;
    valorItens.innerHTML = `R$${valorTotal}`; 
    // Mostrar no Modal os itens e o valor
    qtdCarrinho.innerHTML = qtdItens;
    carrinho.innerHTML += `<p class="itens"> Jogo: ${game20} | Preço: <span class="valor">R$${priceGame20.toFixed(2)}</span></p>`;
  } else {
    alert('O item não foi adicionado!');
  }
})

btnJogo21.addEventListener('click', () => {
  if(confirm('Deseja adicionar Item ao Carrinho?') == true) {
    const game21 = document.getElementById('name-game21').innerText;
    const priceGame21 = 249.99;
    qtdItens++;
    valorTotal += priceGame21;
    valorItens.innerHTML = `R$${valorTotal}`;
    // Mostrar no Modal os itens e o valor
    qtdCarrinho.innerHTML = qtdItens;
    carrinho.innerHTML += `<p class="itens"> Jogo: ${game21} | Preço: <span class="valor">R$${priceGame21.toFixed(2)}</span></p>`;
  } else {
    alert('O item não foi adicionado!');
  }
})

btnJogo22.addEventListener('click', () => {
  if(confirm('Deseja adicionar Item ao Carrinho?') == true) {
    const game22 = document.getElementById('name-game22').innerText;
    const priceGame22 = 149.99;
    qtdItens++;
    valorTotal += priceGame22;
    valorItens.innerHTML = `R$${valorTotal}`; 
    // Mostrar no Modal os itens e o valor
    qtdCarrinho.innerHTML = qtdItens;
    carrinho.innerHTML += `<p class="itens"> Jogo: ${game22} | Preço: <span class="valor">R$${priceGame22.toFixed(2)}</span></p>`;
  } else {
    alert('O item não foi adicionado!');
  }
})

btnJogo23.addEventListener('click', () => {
  if(confirm('Deseja adicionar Item ao Carrinho?') == true) {
    const game23 = document.getElementById('name-game23').innerText;
    const priceGame23 = 149.99;
    qtdItens++;
    valorTotal += priceGame23;
    valorItens.innerHTML = `R$${valorTotal}`;
    // Mostrar no Modal os itens e o valor
    qtdCarrinho.innerHTML = qtdItens;
    carrinho.innerHTML += `<p class="itens"> Jogo: ${game23} | Preço: <span class="valor">R$${priceGame23.toFixed(2)}</span></p>`;
  } else {
    alert('O item não foi adicionado!');
  }
})

btnJogo24.addEventListener('click', () => {
  if(confirm('Deseja adicionar Item ao Carrinho?') == true) {
    const game24 = document.getElementById('name-game24').innerText;
    const priceGame24 = 249.99;
    qtdItens++;
    valorTotal += priceGame24;
    valorItens.innerHTML = `R$${valorTotal}`; 
    // Mostrar no Modal os itens e o valor
    qtdCarrinho.innerHTML = qtdItens;
    carrinho.innerHTML += `<p class="itens"> Jogo: ${game24} | Preço: <span class="valor">R$${priceGame24.toFixed(2)}</span></p>`;
  } else {
    alert('O item não foi adicionado!');
  }
})
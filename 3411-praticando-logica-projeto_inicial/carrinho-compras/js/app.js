  let totalGeral = 0;
  document.getElementById('lista-produtos').innerHTML = '';

function adicionar(){
  // recuperar valores (nome do produto e valores)
  let produto = document.getElementById('produto'). value;
  let nomePoduto = produto.split('-')[0];
  let valorUnitario = produto.split('R$')[1];
  let quantidade = document.getElementById('quantidade'). value;
  // calcular o subtotal do produto
  let preco = quantidade * valorUnitario;
  let carrinho = document.getElementById('lista-produtos');
  // adicionar no carrinho
  carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomePoduto} <span class="texto-azul">R$ ${preco}</span>
        </section>`;
    // atualizar o valor total do carrinho
  totalGeral = totalGeral + preco;
  let campoTotal = document.getElementById('valor-total');
  campoTotal.textContent = `R$ ${totalGeral}`;


}

function limpar(){

}
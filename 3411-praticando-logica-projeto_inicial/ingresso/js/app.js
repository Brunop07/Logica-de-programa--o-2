function comprar() {
  let tipo = document.getElementById ('tipo-ingresso');
  let qtd = parseInt(document.getElementById ('qtd').value);

  if(tipo.value == 'pista') {
      comprarPista(qtd.value);
  }
}

function comprarPista(qtd){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if(qtd > qtdPista) {
        alert('Quantiade indisponivel para tipo pista');
    } else{
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('compra realizada com sucesso!');   
     }

 }

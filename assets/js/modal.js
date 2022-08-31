const btnFinish = document.getElementById('btn-finish');
const btnClear = document.getElementById('btn-excluir');
const btnConfirmar = document.getElementById('btn-confirmar');

function iniciaModal(modalID) {
  const modal = document.getElementById(modalID);
  if(modal) {
    modal.classList.add('mostrar');
    modal.addEventListener('click', (e) => {
      if(e.target.id == modalID || e.target.className == 'fechar') {
        modal.classList.remove('mostrar');
      }
    })
  }

};

btnFinish.addEventListener('click', () => {
  iniciaModal('modal-carrinho');
});

btnConfirmar.addEventListener('click', () => {
  alert(`Compra finalizada! R$${valorTotal} no total.`);
  location.reload();
})

btnClear.addEventListener('click', () => {
  location.reload();
});
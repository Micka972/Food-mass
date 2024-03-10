
//c'est ici que les modal sont gérées pour les interaction depuis les boutons de l'intarface .
function openModal(modalId) {
  document.getElementById(modalId).style.display = 'flex';// si les modals sont affichées, elles sont en display flex.
}

window.addEventListener('click', function(event) {// ici, l'évenement de click à l'extérieur de la modal permet de la fermer.
  let modals = document.getElementsByClassName('modal');
  for (let i = 0; i < modals.length; i++) {
    if (event.target === modals[i]) {
      modals[i].style.display = 'none';// si les modals ne sont pas affichées elle sont en display none
    }
  }
});

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none'; // la fonction ici est appelée pour fermer la modal active
}

document.getElementById('btn1').addEventListener('click', function() { // en cliquant sur bouton1 on ouvre la modal1
  openModal('modal1');
});

// le fonctions suivantes permettent de fermer une modal et ouvrir la suivant en cliquant sur le même bouton.
function openModal2CloseModal1() {
  openModal('modal2');
  closeModal('modal1');
}
function openModal3CloseModal2() {
  openModal('modal3');
  closeModal('modal2');
}
function openModal4CloseModal3() {
  openModal('modal4');
  closeModal('modal3');
}

function openModal5CloseModal4() {

  closeModal('modal4');// il n'y a pas de modal5, la modal4 se ferme.
}

// ci-dessous, les boutons ouvrent et ferment les modal selon les appels de fonctions.
// c'est ici que nous pouvons ajouter les actions pour trier les restaurants.

document.getElementById('btn2').addEventListener('click', openModal2CloseModal1);
document.getElementById('btn3').addEventListener('click', openModal2CloseModal1);

document.getElementById('btn4').addEventListener('click', openModal3CloseModal2);
document.getElementById('btn5').addEventListener('click', openModal3CloseModal2);

document.getElementById('btn6').addEventListener('click', openModal4CloseModal3);
document.getElementById('btn7').addEventListener('click', openModal4CloseModal3);

document.getElementById('btn8').addEventListener('click', openModal5CloseModal4);
document.getElementById('btn9').addEventListener('click', openModal5CloseModal4);




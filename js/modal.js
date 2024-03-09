function openModal(modalId) {
  document.getElementById(modalId).style.display = 'flex';
}

window.addEventListener('click', function(event) {
  let modals = document.getElementsByClassName('modal');
  for (let i = 0; i < modals.length; i++) {
    if (event.target == modals[i]) {
      modals[i].style.display = 'none';
    }
  }
});

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

document.getElementById('btn1').addEventListener('click', function() {
  openModal('modal1');
});

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

document.getElementById('btn2').addEventListener('click', openModal2CloseModal1);
document.getElementById('btn3').addEventListener('click', openModal2CloseModal1);

document.getElementById('btn4').addEventListener('click', openModal3CloseModal2);
document.getElementById('btn5').addEventListener('click', openModal3CloseModal2);

document.getElementById('btn6').addEventListener('click', openModal4CloseModal3);
document.getElementById('btn7').addEventListener('click', openModal4CloseModal3);

document.getElementById('btn8').addEventListener('click', openModal5CloseModal4);
document.getElementById('btn9').addEventListener('click', openModal5CloseModal4);




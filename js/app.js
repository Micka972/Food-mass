

function checkAnswer1(answer) {
  let resultElement = document.getElementById('result1');
  if (answer === 'Proche') {
    resultElement.textContent = 'Alors faites vos lacets ! on y va a pied !';
    alert("Alors faites vos lacets ! on y va a pied !");
  } else if (answer === 'PasProche'){
    resultElement.textContent = 'Preparez la bicyclette !';
    alert("Preparez la bicyclette !")
  }
}

function checkAnswer2(answer) {
  let resultElement = document.getElementById('result2');
  if (answer === 'Gros') {
    resultElement.textContent = 'A table !';
    alert("A table !")
  } else if (answer === 'Petit'){
    resultElement.textContent = 'Sur le pouce !';
    alert("Sur le pouce !")
  }
}

function checkAnswer3(answer) {
  let resultElement = document.getElementById('result3');
  if (answer === 'Viande') {
    resultElement.textContent = 'RRRRRRR !';
    alert("RRRRRRRR !")
  } else if (answer === 'Vege'){
    resultElement.textContent = 'hammmmmm !';
    alert("hammmmmm !")
  }
}

function checkAnswer4(answer) {
  let resultElement = document.getElementById('result4');
  if (answer === 'Exotique') {
    resultElement.textContent = 'Holé !';
    alert("Holé !")
  } else if (answer === 'Local'){
    resultElement.textContent = 'Alors galette saucisse brioche !';
    alert("Alors galette saucisse brioche !")
  }
}


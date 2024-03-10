
// ici c'est les interactions de type quizz.
// Les réponses choisies par l'utilisateur pourront être trétées et les actions en fonctions seront faites en temps réel.

// Ci-dessous, la répétitionde la même fonction adapté à chaque question.
function checkAnswer1(answer) {// fonction pour la question
  let resultElement = document.getElementById('result1');// si réponse 1,
  if (answer === 'Proche') { // la question a l'id 'proche'
    resultElement.textContent = 'Alors faites vos lacets ! on y va a pied !';// appel de commentaire en retour
    alert("Alors faites vos lacets ! on y va a pied !");// Alerte popup pour afficher le retour de commentaire.
  } else if (answer === 'PasProche'){// réponse 2,
    resultElement.textContent = 'Preparez la bicyclette !';// appel de commentaire en retour
    alert("Preparez la bicyclette !")// Alerte popup pour afficher le retour de commentaire.
  }// à noter que le message en alerte popup ne sert qu'a tester le fonctionnement, il faudra le remplacer par la logique de tri des restaurents
}
// ci-dessous, idem pour les autres questions...
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


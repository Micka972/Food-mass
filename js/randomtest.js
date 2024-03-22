//déclaration des variables; en premier les pins du plan et en suivant le restaurants et leurs éléments de tri.

let pins = document.querySelectorAll('.pin1, .pin2, .pin3, .pin4, .pin5, .pin6, .pin7, .pin8');

// set up an array of restaurant objects with the chosen 
// criteria set to true or false.

let restaurants = [
    {
        name: "LU",// le restaurant
        id: "r1",// son id de référence
        pin: "pin1",// sa pin de référence sur le plan
        expensive: false, // initialement "expensive" etait prévu pour evaluer le prix, il s'agit finalement de "à emporter"
        far: true, // "far" correspont à la distance
        meat: true,// et "meat" correspond à "végétarien"
    },
    {
        name: "Honoré",
        id: "r2",
        pin: "pin2",
        expensive: true,
        far: false,
        meat: true,
    },
    {
        name: "Chez Canelle",
        id: "r3",
        pin: "pin3",
        expensive: true,
        far: false,
        meat: false,
    },
    {
        name: "La Mangouste",
        id: "r4",
        pin: "pin4",
        expensive: true,
        far: true,
        meat: false,
    },
    {
        name: "Ichizen",
        id: "r5",
        pin: "pin5",
        expensive: false,
        far: true,
        meat: false,
    },
    {
        name: "Le Lion et l'agneau",
        id: "r6",
        pin: "pin6",
        expensive: true,
        far: true,
        meat: true,
    },
    {
        name: "Le Square",
        id: "r7",
        pin: "pin7",
        expensive: false,
        far: false,
        meat: false,
    },
    {
        name: "La Cantine Fermière",
        id: "r8",
        pin: "pin8",
        expensive: false,
        far: false,
        meat: true,
    },
];
// set up an array of question objects linking criteria to appropriate q.
// string doesn't work as no ref point for pc. 
// key value pair needed
// ci dessous, les trois questions:
let questions = [
    { criteria: "expensive", displayText: "à emporter ?" },
    { criteria: "far", displayText: "à plus de 2mn ?" },
    { criteria: "meat", displayText: "végétarien ?" },
];

// set up variables 
// required to iterate through q
// empty object variable for response - use variable as need to 
// ref input value against question.
// set up refs to the buttons on html.

// ci dessous, les déclarations pour l'indexage, les différantes réponses et les deux bouttons de réonses
let currentIndex = 0;
let responses = {};
let yesButton = document.getElementById("yesButton");
let noButton = document.getElementById("noButton");

// declare function to display current q.
// line 2 provides functionality to ref just the question(.displaytext)
// against the current index value

// première fonction pour les questions :
function displayQuestion() {
    let questionElement = document.getElementById("question");
    questionElement.innerHTML = questions[currentIndex].displayText;
}

// declare function to display result set to none as
//  we do not want to display at first
//fonction qui affiche les différentes question les une apres les autres et les correspondences
function displayResult() {
    document.getElementById("quiz").style.display = "none";

    // inside function, declare variable to store matches to user input.
    // filter will return an array(can only be used on an array - takes callback function as param.)
    // param of restaurant - will look at each restaurant object in turn
    // filter must return boolean - i.e using algorithm only return if ALL
    //  criteria match user input

    let matchingRestaurants = restaurants.filter((restaurant) => {
        return (restaurant.expensive === responses.expensive &&
            restaurant.far === responses.far &&
            restaurant.meat === responses.meat);
    });

    // ici les pins restantes comme réponse finale sont rendues cliquable et redirigent vers au nouvel onglet,
    //elles sont grossient pour faciliter le click et la page se recharge automatiquement pour un nouveau tour de jeu:
    pins.forEach(pin => {
        pin.addEventListener('click', () => {
            let url = pin.parentElement.querySelector('a').getAttribute('href');
            window.open(url, '_blank');
            setTimeout(() => {
                location.reload();
            }, 100);
        });
        pin.setAttribute('r', '20');


    });
    // ci dessous le restaurant trouvé est affiché avec son lien de redirrection:
    console.log("Matching Restaurants:", matchingRestaurants);
    for (let i = 0; i < matchingRestaurants.length; i++) {
        document.getElementById(matchingRestaurants[i].id).style.display = "block";

    }
}

//ci dessous, la logique permettant faire disparaitre de la carte les restaurants éliminés au fur et à mesure
function handleUserInput(userInput) {
    // changed from checking on currentIndex of questions (i.e. always dependent on order of questions array)
    // to checking case on the criteria value. This means array can be re-ordered without breaking the rest
    // of the code, and the conditions read semantically more accurately. 
    switch (questions[currentIndex].criteria) {
        case "expensive"://cher
            if (userInput === false) {
                document.querySelectorAll('.pin6, .pin2,  .pin3, .pin4').forEach(pin => {
                    if (pin.style.display !== 'none') {
                        pin.style.display = 'none';
                    }
                });
            }
            if (userInput === true) {
                document.querySelectorAll('.pin1, .pin5, .pin7, .pin8').forEach(pin => {
                    if (pin.style.display !== 'none') {
                        pin.style.display = 'none';
                    }
                });
            }
            break;
        case "far"://loin
            if (userInput === false) {
                document.querySelectorAll(' .pin4, .pin5, .pin6, .pin1').forEach(pin => {
                    if (pin.style.display !== 'none') {
                        pin.style.display = 'none';
                    }
                });
            }
            if (userInput === true) {
                document.querySelectorAll('.pin3, .pin2, .pin8, .pin7').forEach(pin => {
                    if (pin.style.display !== 'none') {
                        pin.style.display = 'none';
                    }
                });
            }
            break;
        case "meat": // Viande
            if (userInput === false) {
                document.querySelectorAll('.pin6, .pin2, .pin1, .pin8').forEach(pin => {
                    if (pin.style.display !== 'none') {
                        pin.style.display = 'none';

                    }
                });

                // Loops which were previously always run on item [2] in the array are moved 
                // into the displayResult() function - allows question array reordering and makes
                // better semantic sense for this logic to be part of that function.

            }
            if (userInput === true) {
                document.querySelectorAll('.pin4, .pin3, .pin7, .pin5').forEach(pin => {
                    if (pin.style.display !== 'none') {
                        pin.style.display = 'none';

                    }
                });
            }
            break;
    }

    // function to take the criteria of questions array and its current index
    // and to fill the empty responeses object with the key value pairs.
    // increment to next question then display next question or result.

    responses[questions[currentIndex].criteria] = userInput;
    console.log("Current Responses:", responses);
    currentIndex++;
    if (currentIndex > questions.length - 1) {
        displayResult();
    } else {
        displayQuestion();
    }
}
// adds click listeners functionality to buttons and
//  assigns the boolean true or false accordingly
//ci dessous, les clicks de l'utilisateurs génèrent les réponses appropriées
yesButton.addEventListener("click", () => {
    handleUserInput(true);
});

noButton.addEventListener("click", () => {
    handleUserInput(false);
});
//Ci dessous méthode de rendomisation de l'ordre des questions
//For each item in the array, you return
//a positive or negative number from the callback
//which determines whether or not a gets swapped with b.
questions.sort((a, b) => 0.5 - Math.random());

// calls function to display 1st q - at end as it will be done first.

displayQuestion();

const reloadLinks = document.querySelectorAll('.reload-link');

reloadLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        // Recharge la page après un court délai
        setTimeout(() => {
            location.reload();
        }, 100);
    });
});
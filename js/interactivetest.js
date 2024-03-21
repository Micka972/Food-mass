


let pins = document.querySelectorAll('.pin1, .pin2, .pin3, .pin4, .pin5, .pin6, .pin7, .pin8');


let restaurants = [
    {
        name: "LU",
        id: "r1",
        expensive: false,
        far: true,
        meat: true,
    },
    {
        name: "Honoré",
        id: "r2",
        expensive: true,
        far: false,
        meat: true,
    },
    {
        name: "Chez Canelle",
        id: "r3",
        expensive: true,
        far: false,
        meat: false,
    },
    {
        name: "La Mangouste",
        id: "r4",
        expensive: true,
        far: true,
        meat: false,
    },
    {
        name: "Ichizen",
        id: "r5",
        expensive: false,
        far: true,
        meat: false,
    },
    {
        name: "Le Lion et l'agneau",
        id: "r6",
        expensive: true,
        far: true,
        meat: true,
    },
    {
        name: "Le Square",
        id: "r7",
        expensive: false,
        far: false,
        meat: false,
    },
    {
        name: "La Cantine Fermière",
        id: "r8",
        expensive: false,
        far: false,
        meat: true,
    },
];

let questions = [
    { criteria: "expensive", displayText: "à emporter ?" },
    { criteria: "far", displayText: "à plus de 2mn ?" },
    { criteria: "meat", displayText: "végétarien ?" },
];



let currentIndex = 0;
let responses = {};
let yesButton = document.getElementById("yesButton");
let noButton = document.getElementById("noButton");


function displayQuestion() {
    let questionElement = document.getElementById("question");
    questionElement.innerHTML = questions[currentIndex].displayText;
}


function displayResult() {
    document.getElementById("quiz").style.display = "none";


    let matchingRestaurants = restaurants.filter((restaurant) => {
        return (restaurant.expensive === responses.expensive &&
            restaurant.far === responses.far &&
            restaurant.meat === responses.meat);
    });


    // Modify result pins
    pins.forEach(pin => {
        pin.addEventListener('click', () => {
            let url = pin.parentElement.querySelector('a').getAttribute('href');
            window.open(url, '_blank');
        });
        pin.setAttribute('r', '20');


    });

    console.log("Matching Restaurants:", matchingRestaurants);
    for (let i = 0; i < matchingRestaurants.length; i++) {
        document.getElementById(matchingRestaurants[i].id).style.display = "block";

    }
}

function handleUserInput(userInput) {
    switch (currentIndex) {
        case 0://take away
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
        case 1://2mn
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
        case 2: // Végé
            if (userInput === false) {
                document.querySelectorAll('.pin6, .pin2, .pin1, .pin8').forEach(pin => {
                    if (pin.style.display !== 'none') {
                        pin.style.display = 'none';
                    }
                });
                pins.forEach(pin => {
                    pin.addEventListener('click', () => {
                        let url = pin.parentElement.querySelector('a').getAttribute('href');
                        window.open(url, '_blank');
                    });
                    pin.setAttribute('r', '20');
                });
            }
            if (userInput === true) {
                document.querySelectorAll('.pin4, .pin3, .pin7, .pin5').forEach(pin => {
                    if (pin.style.display !== 'none') {
                        pin.style.display = 'none';
                    }
                });
                pins.forEach(pin => {
                    pin.addEventListener('click', () => {
                        let url = pin.parentElement.querySelector('a').getAttribute('href');
                        window.open(url, '_blank');
                    });
                    pin.setAttribute('r', '20');
                });
            }
            break;
    }




    responses[questions[currentIndex].criteria] = userInput;
    console.log("Current Responses:", responses);
    currentIndex++;
    if (currentIndex > questions.length - 1) {
        displayResult();
    } else {
        displayQuestion();
    }
}

yesButton.addEventListener("click", () => {
    handleUserInput(true);
});

noButton.addEventListener("click", () => {
    handleUserInput(false);
});


displayQuestion();











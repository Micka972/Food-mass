let restaurants = [
    {
        name: "Restaurant1",
        id: "r1",
        expensive: false,
        far: false,
        meat: false,
    },
    {
        name: "Restaurant2",
        id: "r2",
        expensive: false,
        far: false,
        meat: true,
    },
    {
        name: "Restaurant3",
        id: "r3",
        expensive: false,
        far: true,
        meat: false,
    },
    {
        name: "Restaurant4",
        id: "r4",
        expensive: false,
        far: true,
        meat: true,
    },
    {
        name: "Restaurant5",
        id: "r5",
        expensive: true,
        far: false,
        meat: false,
    },
    {
        name: "Restaurant6",
        id: "r6",
        expensive: true,
        far: false,
        meat: true,
    },
    {
        name: "Restaurant7",
        id: "r7",
        expensive: true,
        far: true,
        meat: false,
    },
    {
        name: "Restaurant8",
        id: "r8",
        expensive: true,
        far: true,
        meat: true,
    },
];

let questions = [
    { criteria: "expensive", displayText: "Do you have a big budget?" },
    { criteria: "far", displayText: "Do you feel like walking?" },
    { criteria: "meat", displayText: "Do you eat meat?" },
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




    console.log("Matching Restaurants:", matchingRestaurants);
    for (let i = 0; i < matchingRestaurants.length; i++) {
        document.getElementById(matchingRestaurants[i].id).style.display = "block";
    }
}


function handleUserInput(userInput) {
    switch (currentIndex) {
        case 0:
            if (userInput === false) {
                document.querySelectorAll('.pin5, .pin6, .pin7, .pin8').forEach(pin => {
                    if (pin.style.display !== 'none') {
                        pin.style.display = 'none';
                    }
                });
            }
            if (userInput === true) {
                document.querySelectorAll('.pin1, .pin2, .pin3, .pin4').forEach(pin => {
                    if (pin.style.display !== 'none') {
                        pin.style.display = 'none';
                    }
                });
            }
            break;
        case 1:
            if (userInput === false) {
                document.querySelectorAll('.pin7, .pin3, .pin4').forEach(pin => {
                    if (pin.style.display !== 'none') {
                        pin.style.display = 'none';
                    }
                });
            }
            if (userInput === true) {
                document.querySelectorAll('.pin2, .pin8').forEach(pin => {
                    if (pin.style.display !== 'none') {
                        pin.style.display = 'none';
                    }
                });
            }
            break;
        case 2:
            if (userInput === false) {
                document.querySelectorAll('.pin2, .pin6').forEach(pin => {
                    if (pin.style.display !== 'none') {
                        pin.style.display = 'none';
                    }
                });
            }
            if (userInput === true) {
                document.querySelectorAll('.pin3, .pin7').forEach(pin => {
                    if (pin.style.display !== 'none') {
                        pin.style.display = 'none';
                    }
                });
            }
            break;
        case 3:
            if (userInput === false) {
                document.querySelectorAll('.pin1, .pin6').forEach(pin => {
                    if (pin.style.display !== 'none') {
                        pin.style.display = 'block';
                    }
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
displayMap();










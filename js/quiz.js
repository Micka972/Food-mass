// set up an array of questions. used reference to id of
// questionElement to add question from array to html
// via inner html.
// below did not work as need a way to ref q string to user input response value
/*
let questions = [
    "Do you have a big budget?",
    "Do you feel like walking?",
    "Do you eat meat?",
];
// check that i have linked it and can get q on screen.
let questionElement = document.getElementById("question");
questionElement.innerHTML = "question 1";
questionElement.style.color = "red";
questionElement.innerHTML = questions[0];
*/

// START

// set up an array of restaurant objects with the chosen 
// criteria set to true or false.
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

// set up an array of question objects linking criteria to appropriate q.
// string doesn't work as no ref point for pc. See above.
// key value pair needed
let questions = [
    { criteria: "expensive", displayText: "Do you have a big budget?" },
    { criteria: "far", displayText: "Do you feel like walking?" },
    { criteria: "meat", displayText: "Do you eat meat?" },
];

// set up variables 
// required to iterate through q
// empty object variable for response - use variable as need to 
// ref input value against question.
// set up refs to the buttons on html.

let currentIndex = 0;
let responses = {};
let yesButton = document.getElementById("yesButton");
let noButton = document.getElementById("noButton");

// declare function to display current q.
// line 2 provides functionality to ref just the question(.displaytext)
// against the current index value
function displayQuestion() {
    let questionElement = document.getElementById("question");
    questionElement.innerHTML = questions[currentIndex].displayText;
};


// declare function to display result set to none as
//  we do not want to display at first
function displayResult() {
    document.getElementById("quiz").style.display = "none";
    // document.getElementById("result").innerHTML = JSON.stringify(responses);
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

    // JSON.stringify - used in debugging to display JS objects (rather than [Object object])
    // document.getElementById("result").innerHTML = JSON.stringify(matchingRestaurants);

    // loop through matchingRestaurants and for each matching restaurant set its html to visible
    // for (let i = 0; i < matchingRestaurants.length; i++) {
    //     document.getElementById(matchingRestaurants[i].id).style.display = "block";
    // }

    // loop to display div replaced with redirect to restaurant page.
    window.location.replace(`/${matchingRestaurants[0].id}.html`)
};
// function to take the criteria of questions array and its current index
// and to fill the empty responeses object with the key value pairs.
// increment to next question then display next question or result.
function handleUserInput(userInput) {
    responses[questions[currentIndex].criteria] = userInput;
    currentIndex++;
    if (currentIndex > questions.length - 1) {
        displayResult();
    } else {
        displayQuestion();
    }
};
// adds click listeners functionality to buttons and
//  assigns the boolean true or false accordingly
yesButton.addEventListener("click", () => {
    handleUserInput(true);
});

noButton.addEventListener("click", () => {
    handleUserInput(false);
});
// calls function to display 1st q - at end as it will be done first.

displayQuestion();

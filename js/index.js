/* Easter egg code to make the question box user responsive
use math.random to get random number between 1 and 8
then add that number to the attribute for the restaurant html
voila surprise restaurant*/

let surprise = document.getElementById("surprise");
let surpriseNumber = Math.ceil(Math.random() * 8);
surprise.setAttribute("href", `r${surpriseNumber}.html`);
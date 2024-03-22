let surprise = document.getElementById("surprise");
let surpriseNumber = Math.ceil(Math.random() * 8);
surprise.setAttribute("href", `r${surpriseNumber}.html`);
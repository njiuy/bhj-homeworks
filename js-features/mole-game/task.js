getHole = index => document.getElementById(`hole${index}`);
let deadMole = document.getElementById('dead');
let lostMole = document.getElementById('lost');
let strike = Number(deadMole.textContent);
let error = Number(lostMole.textContent);

function checkWin(deadMole, lostMole) {
    if (deadMole === 10) {
        alert("Вы победили!");
        location.reload();
    } else if (lostMole === 5) {
        alert("Вы проиграли!");
        location.reload();
    };
};

for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = function () {
        if (this.className.includes('hole_has-mole')) {
            strike += 1;
            deadMole.textContent = strike;
        } else {
            error += 1;
            lostMole.textContent = error;
        };
        checkWin(strike, error);
    };
};
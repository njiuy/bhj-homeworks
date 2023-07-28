let clickerCounter = document.getElementById("clicker__counter");
let cookie = document.getElementById("cookie");
let value = Number(clickerCounter.textContent);

cookie.onclick = function () {
    value += 1;
    clickerCounter.textContent = value;
    if (cookie.width === 150) {
        cookie.width = 100;
        cookie.height = 100;
    } else {
        cookie.width = 150;
        cookie.height = 150;
    }
}
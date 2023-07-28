let endTimer = setInterval(function() {
    let timer = document.getElementById("timer");
    
    if (timer.textContent > 0) {
        timer.textContent -= 1;
    } else {
        alert ("Вы победили в конкурсе!");
        clearInterval(endTimer);
    }
}, 1000)
let xturn = true;

(function gamebroad() {
        let board = `
        <div class="board x" id="board">
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
        </div>`
        document.body.innerHTML = board;
        let cell = document.querySelectorAll(".cell")
        cell.forEach(cell => {
            cell.addEventListener("click", handleclick, {once: true})
        })
})();


function handleclick(e) {
    if (xturn) {
        e.target.classList.add('x');
        xturn = false;
        e.target.parentElement.classList.remove('x');
        e.target.parentElement.classList.add('circle');
    } else {
        e.target.classList.add('circle');
        xturn = true;
        e.target.parentElement.classList.remove('circle');
        e.target.parentElement.classList.add('x');
    }
};

function checkWin() {
    
};
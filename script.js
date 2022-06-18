(function gamebroad() {
        let board = `
        <div class="board" id="board">
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
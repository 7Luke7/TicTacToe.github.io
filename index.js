/**
 Game initializer function
 click function update 
 update initialized variables function
 check for winner
 restart game and re-initialize the variables 
*/

const cells = document.querySelectorAll(".cell")
const restartBtn = document.getElementById("restartBtn")
const statusText = document.getElementById("statusText")

class game_structure {
    constructor() {
        this.patterns = ["", "", "", "","", "","", "","",]
        this.turn = "X"
        this.winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        this.running = true
        this.xWon = false
    }

    click_function(cell) {
        if (this.patterns[cell.getAttribute("cellIndex")] != "") {
            return
        } else {
            if (this.running) {
                this.update_values(cell)
            } else {
                return
            }
        }
    }

    update_values(cell) {
            if (this.turn === "X") {
                this.patterns[cell.getAttribute("cellIndex")] = this.turn
                cell.textContent = this.turn
                this.turn = "O"
            } else {
                this.patterns[cell.getAttribute("cellIndex")] = this.turn
                cell.textContent = this.turn
                this.turn = "X"
            }
            this.check_win()
    }
    
    check_win() {
        console.log("hi")
        for (let i = 0; i < this.winConditions.length; i++) {
            this.cellA = this.winConditions[i][0]
            this.cellB = this.winConditions[i][1]
            this.cellC = this.winConditions[i][2]
            
            if (this.patterns[this.cellA] === "X" && this.patterns[this.cellB] === "X" && this.patterns[this.cellC] === "X") {
                statusText.innerHTML = "X won."
                this.xWon = true
                this.running = false
            } else if (this.patterns[this.cellA] === "O" && this.patterns[this.cellB] === "O" && this.patterns[this.cellC] === "O") {
                statusText.innerHTML = "O won."
                this.running = false
            } else if(!this.patterns.includes("") && this.turn === "O" && this.xWon === false) {
                statusText.innerHTML = "Tie."
                this.running = false
            }
        }
    }

    restart_game() {
        this.patterns = ["", "", "", "","", "","", "","",]
        this.turn = "X"
        cells.forEach(cell => cell.textContent = "")
        statusText.innerHTML = ""
        this.running = true
        this.xWon = false
    }
}

let game = new game_structure()
 
cells.forEach(cell => {
    cell.addEventListener("click", () => {
        game.click_function(cell)
    })
})

restartBtn.addEventListener("click", () => {
  game.restart_game()  
})
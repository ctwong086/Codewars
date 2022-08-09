//https://www.codewars.com/kata/587136ba2eefcb92a9000027

//Attempt#1
function SnakesLadders() {
    this.snakes = {16: 6, 46: 25, 49: 11, 62: 19, 64: 60, 74: 53, 89: 68, 92: 88, 95: 75, 99: 80};
    this.ladders = {2: 38, 7: 14, 8: 31, 15: 26, 21: 42, 28: 84, 36: 44, 51: 67, 71: 91, 78: 98, 87: 94};
    this.scores = {1: 0, 2: 0};
    this.currentPlayer = 1;
    this.gameOver = false;
};

SnakesLadders.prototype.play = function(die1, die2) {
    if(this.gameOver === true) {return 'Game over!'};
  
    let steps = die1 + die2;
    this.scores[this.currentPlayer] += steps;
    
    if(this.scores[this.currentPlayer] === 100) {
        this.gameOver = true;
        return `Player ${this.currentPlayer} Wins!`;
    } else if(this.scores[this.currentPlayer] > 100) {
        this.scores[this.currentPlayer] = 100 - (this.scores[this.currentPlayer] - 100);
    }
  
    if(this.snakes[this.scores[this.currentPlayer]]) {
        this.scores[this.currentPlayer] = this.snakes[this.scores[this.currentPlayer]];
    } else if(this.ladders[this.scores[this.currentPlayer]]) {
        this.scores[this.currentPlayer] = this.ladders[this.scores[this.currentPlayer]];
    }
    
    let res = `Player ${this.currentPlayer} is on square ${this.scores[this.currentPlayer]}`;
  
    if(die1 !== die2) {
        this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
    }
    
    return res;
}
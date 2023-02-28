const container = document.querySelector('.container');

// Module for Game Board

const gameBoard = (() => {
    return {
        board : ["x", "o"],
    }
})();

// Factory Function for Players

const playersFactory = (name) => {
    return {name};
};


// game flow module

const gameFlow = (() => {
    const playerOne = playersFactory(prompt("players ones name?"));
    const playerTwo = playersFactory(prompt("player twos name?"));
    return {
        playerOne,
        playerTwo,
        displayMoves : function () {
            for (const playerMove of gameBoard.board) {
                const gamePiece = document.createElement('p');
                gamePiece.classList.add('gamePiece');
                gamePiece.textContent = playerMove;
                container.appendChild(gamePiece);
            }
        }
    }
})();
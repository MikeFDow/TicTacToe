const container = document.querySelector('.container');

// Module for Game Board

const gameBoard = (() => {
    return {
        board : ["x", "o"],
    }
})();

// Factory Function for Players

const playersFactory = (name, age) => {
    return {name, age};
};


// game flow module

const gameFlow = (() => {
    return {
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
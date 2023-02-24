const container = document.querySelector('.container');

// Module for Game Board

const gameBoard = (() => {
    const board = ["x", "o", "x"];
    return board;
})();

// Factory Function for Players

const playersFactory = (name, age) => {
    return {name, age};
};




function displayMoves () {
    for (const playerMove of gameBoard) {
        const gamePiece = document.createElement('p');
        gamePiece.classList.add('gamePiece');
        gamePiece.textContent = playerMove;
        container.appendChild(gamePiece);


    }
};
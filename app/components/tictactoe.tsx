"use client"
import React, { useState, useEffect } from 'react';

const TicTacToe: React.FC = () => {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameBoard, setGameBoard] = useState(Array(9).fill(''));
  const [gameActive, setGameActive] = useState(true);
  const [status, setStatus] = useState("Player X's turn");

  useEffect(() => {
    createBoard();
  }, []);

  const createBoard = () => {
    return gameBoard.map((cell, index) => (
      <div
        key={index}
        className="cell w-20 h-20 flex items-center justify-center text-2xl bg-amber-500 text-white border-2 border-white rounded-md cursor-pointer transition duration-300 ease-in-out hover:bg-blue-700"
        onClick={() => handleCellClick(index)}
      >
        {cell}
      </div>
    ));
  };

  const handleCellClick = (index: number) => {
    if (gameBoard[index] === '' && gameActive) {
      const newGameBoard = gameBoard.slice();
      newGameBoard[index] = currentPlayer;
      setGameBoard(newGameBoard);
      checkWinner(newGameBoard);
      togglePlayer();
    }
  };

  const togglePlayer = () => {
    const nextPlayer = currentPlayer === 'X' ? 'O' : 'X';
    setCurrentPlayer(nextPlayer);
    setStatus(`Player ${nextPlayer}'s turn`);
  };

  const checkWinner = (board: string[]) => {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        displayWinner();
        return;
      }
    }

    if (!board.includes('')) {
      displayDraw();
    }
  };

  const displayWinner = () => {
    setStatus(`Player ${currentPlayer} wins!`);
    setGameActive(false);
  };

  const displayDraw = () => {
    setStatus('It\'s a draw!');
    setGameActive(false);
  };

  const resetGame = () => {
    setCurrentPlayer('X');
    setGameBoard(Array(9).fill(''));
    setGameActive(true);
    setStatus("Player X's turn");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-amber-500 to-white">
      <h1 className="text-4xl font-bold text-blue-600">Tic-Tac-Toe</h1>
      <div id="board" className="board grid grid-cols-3 gap-2 my-4">
        {createBoard()}
      </div>
      <div id="status" className="status text-lg text-gray-800 mb-4">{status}</div>
      <button
        onClick={resetGame}
        className="reset-btn px-4 py-2 bg-red-500 text-white font-semibold rounded-md transition duration-300 ease-in-out hover:bg-red-700"
      >
        Reset Game
      </button>
    </div>
  );
};

export default TicTacToe;

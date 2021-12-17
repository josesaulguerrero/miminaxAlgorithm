import { checkWinner } from "./utilities/checkWinner";
import { findEmptyCells } from "./utilities/findEmptyCells";
import { gameBoard } from "./board";
console.table(findEmptyCells(gameBoard));

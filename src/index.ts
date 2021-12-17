import { Board, Cell, PlayerMark, Result, Test } from "./types/types";
import { checkWinner } from "./utilities/checkWinner";
import { findEmptyCells } from "./utilities/findEmptyCells";
import { gameBoard } from "./board";

const findBestMove = (gameBoard: Board, playerMark: PlayerMark): Result => {
	const emptyCells: Cell[] = findEmptyCells(gameBoard);
	if (checkWinner(gameBoard, PlayerMark.AIMark)) {
		return {
			score: 1,
		};
	}
	if (checkWinner(gameBoard, PlayerMark.humanMark)) {
		return {
			score: -1,
		};
	}
	if (emptyCells.length === 0) {
		return {
			score: 0,
		};
	}

	const AllTests: Test[] = [];
	for (let i: number = 0; i < emptyCells.length; i++) {
		const emptyCell: Cell = gameBoard[emptyCells[i] as number];
		if (playerMark === PlayerMark.AIMark) {
			gameBoard[emptyCell as number] = PlayerMark.AIMark;
			const result = findBestMove(gameBoard, PlayerMark.humanMark);
			const test: Test = {
				index: emptyCell as number,
				score: result.score,
			};
			AllTests.push(test);
			gameBoard[emptyCell as number] = emptyCell;
		} else {
			gameBoard[emptyCell as number] = PlayerMark.humanMark;
			const result = findBestMove(gameBoard, PlayerMark.AIMark);
			const test: Test = {
				index: emptyCell as number,
				score: result.score,
			};
			AllTests.push(test);
			gameBoard[emptyCell as number] = emptyCell;
		}
	}

	let bestMove: unknown = null;

	for (let i: number = 0; i < AllTests.length; i++) {
		if (playerMark === PlayerMark.AIMark) {
			let bestValue: number = -999;
			if (AllTests[i].score > bestValue) {
				bestValue = AllTests[i].score;
				bestMove = {
					index: AllTests[i].index,
					score: AllTests[i].score,
				};
			}
		} else {
			let bestValue: number = 999;
			if (AllTests[i].score < bestValue) {
				bestValue = AllTests[i].score;
				bestMove = {
					index: AllTests[i].index,
					score: AllTests[i].score,
				};
			}
		}
	}

	return bestMove as Result;
};

console.log(findBestMove(gameBoard, PlayerMark.AIMark));

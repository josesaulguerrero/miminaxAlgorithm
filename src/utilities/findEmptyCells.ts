import { Board, Cell } from "@types";

export const findEmptyCells = (gameBoard: Board): Cell[] => {
	return gameBoard.filter((cell: Cell) => cell !== "X" && cell !== "O");
};

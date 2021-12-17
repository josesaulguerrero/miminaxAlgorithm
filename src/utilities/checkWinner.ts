import { Board, PlayerMark } from "@types";

export const checkWinner = (
	gameBoard: Board,
	playerMark: PlayerMark
): boolean => {
	const winCombinations: number[][] = [
		[0, 1, 2],
		[0, 4, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[2, 4, 6],
		[3, 4, 5],
		[6, 7, 8],
	];

	return winCombinations.some((combination: number[]) =>
		combination.every((index: number) => gameBoard[index] === playerMark)
	);
};

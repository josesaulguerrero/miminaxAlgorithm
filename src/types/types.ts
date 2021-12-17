// a cell might have a string with the player mark or an index number.
export type Cell = string | number;
// the board is a set of cells.
export type Board = Cell[];
// the player mark might be "X" or "O".
export enum PlayerMark {
	AIMark = "X",
	humanMark = "O",
}
//the score is required, but sometimes the index is optional.
export type Result = {
	score: number;
	index?: Cell;
};
//the test must have and index and a score.
export type Test = {
	index: Cell;
	score: number;
};

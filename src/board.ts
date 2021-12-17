// a cell might have a string with the player mark or an index number.
type Cell = string | number;
// the board is a set of cells.
type Board = Cell[];

export const Board: Board = ["X", "O", "O", 3, "X", "O", 6, "X", 8];

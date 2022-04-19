import { Board } from "../src/board";

describe("Board", () => {
  it("should create a board correctly", () => {
    const board = new Board(3, 3);
    expect(board.board).toEqual([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
  });

  it("should create a board correctly with alive cell", () => {
    const board = new Board(3, 3);
    board.board[1][1] = 1;
    board.tick();
    expect(board.board).toEqual([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
  });
});

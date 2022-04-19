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

  it("should create a board correctly with few cells", () => {
    const board = new Board(3, 3);
    board.board[0][0] = 1;
    board.board[0][1] = 1;
    board.board[1][0] = 1;
    board.board[1][1] = 1;
    board.tick();
    expect(board.board).toEqual([
      [1, 1, 0],
      [1, 1, 0],
      [0, 0, 0],
    ]);
  });

  it("should create a board with three alive cells in diagonal", () => {
    const board = new Board(3, 3);
    board.board[0][0] = 1;
    board.board[1][1] = 1;
    board.board[2][2] = 1;
    board.tick();
    expect(board.board).toEqual([
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ]);
  });
});

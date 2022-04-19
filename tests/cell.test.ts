import { Cell } from "../src/cell";

describe("Cell", () => {
  it("should create cell correctly", () => {
    const cell = new Cell(true, 2);
    expect(cell.active).toBe(true);
  });

  it("should create cell with one neighbour and die after tick", () => {
    const cell = new Cell(true, 1);
    cell.tick();
    expect(cell.active).toBe(false);
  });

  it("should create cell with two neighbours and live after tick", () => {
    const cell = new Cell(true, 2);
    cell.tick();
    expect(cell.active).toBe(true);
  });
});

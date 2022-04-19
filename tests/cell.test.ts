import { Cell } from "../src/cell";

describe("Cell", () => {
  it("should create cell correctly", () => {
    const cell = new Cell(true, 2);
    expect(cell.active).toBe(true);
  });
});

export class Cell {
  private _active: boolean;
  private _neighbors: number;

  constructor(active: boolean, neighbors: number) {
    this._active = active;
    this._neighbors = neighbors;
  }

  get active(): boolean {
    return this._active;
  }
}

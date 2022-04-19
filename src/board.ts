export class Board {
  private readonly w: number;
  private readonly h: number;
  board: number[][] = [];
  constructor(w: number, h: number) {
    this.w = w;
    this.h = h;
    this.initBoard();
  }
  private initBoard(): void {
    this.board = Array.from(Array(this.w), () => Array(this.h).fill(0));
  }
}

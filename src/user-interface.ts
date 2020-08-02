export class UserInterface {
  static instance: UserInterface;

  private canvas: HTMLCanvasElement;

  static getInstance() {
    if (!UserInterface.instance) {
      UserInterface.instance = new UserInterface();
    }
    return this.instance;
  }

  constructor() {
    this.createCanvas();
  }

  getCanvas(): HTMLCanvasElement {
    return this.canvas;
  }

  private createCanvas() {
    this.canvas = document.createElement('canvas');
    this.canvas.width = 600;
    this.canvas.height = 600;
    this.canvas.style.height = '600px';
    this.canvas.style.width = '600px';
    document.body.append(this.canvas);
  }

}

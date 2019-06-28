import { UserInterface } from "../user-interface";

export class RandomWalk {
  canvasContext: CanvasRenderingContext2D;
  position = {
    x: 300,
    y: 300,
  };

  init(ui: UserInterface) {
    const canvas = ui.getCanvas();
    this.canvasContext = canvas.getContext('2d');
    this.canvasContext.strokeStyle = '#000000';
  }

  beginWalking() {
    setInterval(() => {
      this.drawPosition();
      this.walk();
    }, 5);
  }

  private drawPosition() {
    this.canvasContext.strokeRect(this.position.x, this.position.y, 1, 1);
  }

  private walk() {
    const dir = Math.random();
    if (dir <= 0.25) {
      this.position.x += 1;
    } else if (dir <= 0.5) {
      this.position.x -= 1;
    } else if (dir <= 0.75) {
      this.position.y += 1;
    } else {
      this.position.y -= 1;
    }
  }
}

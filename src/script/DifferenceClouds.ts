import P5 from 'p5';

export default class DifferenceClouds {
  p5: P5 | null = null;

  protected stageW = 0;

  protected stageH = 0;

  private seed = 0;

  private cellSize = 0;

  constructor(private node: HTMLElement) {
    this.node = node;

    this.sketch = this.sketch.bind(this);
    this.onResize = this.onResize.bind(this);
  }

  init() {
    this.onResize();

    document.querySelector('canvas')?.remove();

    this.p5 = new P5(this.sketch, this.node);
  }

  private sketch(p: P5) {
    p.setup = () => {
      p.resizeCanvas(this.stageW, this.stageH);

      p.colorMode('hsb', 360, 100, 100, 100);
    };

    p.draw = () => {
      p.strokeWeight(this.cellSize ** 2);
      p.background(0, 0, 100, 100);

      for (let w = 0; w <= p.width; w += this.cellSize) {
        for (let h = 0; h <= p.height; h += this.cellSize) {
          const n = p.noise(w * 0.01, h * 0.0025 + this.seed, this.seed);
          const s = p.round(n * 10);
          console.log(s);

          p.stroke(180, s, 100, 100);
          /* if (brightness <= 185 && brightness >= 175) {
            p.point(w, h);
          }*/
          p.point(w, h);
        }
      }

      this.seed += 0.04;
    };
  }

  private onResize() {
    this.stageW = window.innerWidth;
    this.stageH = window.innerHeight;
    // this.stageW = 400;
    // this.stageH = 400;
    this.cellSize = this.stageW / 360;
  }
}

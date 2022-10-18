import P5 from 'p5';

export default class PerlinNoise {
  p5: P5;

  protected stageW = 0;

  protected stageH = 0;

  private readonly lineNum = 100; // ラインの数

  private readonly segmentNum = 100; // 分割数

  constructor(node: HTMLElement) {
    this.p5 = new P5(() => null, node);

    this.sketch = this.sketch.bind(this);
    this.onResize = this.onResize.bind(this);
  }

  init() {
    this.onResize();

    document.querySelector('canvas')?.remove();

    this.sketch();
  }

  private sketch() {
    const { p5 } = this;

    p5.setup = () => {
      p5.resizeCanvas(this.stageW, this.stageH);
    };

    p5.draw = () => {
      const { lineNum, segmentNum, stageW, stageH } = this;

      const amplitude = stageH / 2; // 振幅

      p5.colorMode('hsb');
      p5.background(0, 0, 0);
      p5.noFill();

      const time = Date.now() / 5000; // 媒介変数(時間)

      [...Array(lineNum).keys()].forEach((i) => {
        const coefficient = 50 + i;

        const h = Math.round((i / lineNum) * 360); // 色相
        const s = Math.round((i / lineNum) * 360); // 彩度
        const l = Math.round((i / lineNum) * 100); // 明度

        p5.beginShape();
        p5.stroke(h, s, l);

        [...Array(segmentNum).keys()].forEach((j) => {
          // X座標
          const x = (j / (segmentNum - 1)) * stageW;

          // 横軸の入力値
          const px = j / coefficient;
          // 時間の入力値
          const py = i / 1000 + time;

          // Y座標
          const seed = p5.noise(px, py);
          const y = amplitude * seed;

          // 線を描く
          p5.vertex(x, y);
        });

        p5.endShape();
      });
    };

    p5.windowResized = () => {
      this.onResize();
      console.log(this.stageW, this.stageH);

      p5.resizeCanvas(this.stageW, this.stageH);
    };
  }

  private onResize() {
    this.stageW = window.innerWidth * window.devicePixelRatio;
    this.stageH = window.innerHeight * window.devicePixelRatio;
  }
}

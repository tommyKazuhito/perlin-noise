export default class SimpleLine {
  protected stageW = 0;

  protected stageH = 0;

  protected context: CanvasRenderingContext2D | null;

  constructor(private canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');

    this.tick = this.tick.bind(this);
    this.onResize = this.onResize.bind(this);
  }

  init() {
    this.onResize();

    this.tick();

    window.addEventListener('resize', this.onResize);
  }

  protected draw() {
    const { context, stageW, stageH } = this;

    if (!context) {
      return;
    }

    context.clearRect(0, 0, stageW, stageH);
    context.lineWidth = 10;
    context.beginPath();
    context.strokeStyle = '#fff';
    context.moveTo(0, stageH * 0.5);
    context.lineTo(stageW, stageH * 0.5);

    context.stroke();
  }

  private tick() {
    requestAnimationFrame(this.tick);

    this.draw();
  }

  private onResize() {
    this.stageW = window.innerWidth * window.devicePixelRatio;
    this.stageH = window.innerHeight * window.devicePixelRatio;

    this.canvas.width = this.stageW;
    this.canvas.height = this.stageH;
  }
}

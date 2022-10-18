import SimpleLine from './SimpleLine';

export default class CurveLine extends SimpleLine {
  private readonly segmentNum = 1000; // 分割数

  draw() {
    const { context, stageW, stageH, segmentNum } = this;

    if (!context) {
      return;
    }

    const amplitude = stageH / 3; // 振幅
    const time = Date.now() / 1000; // 媒介変数(時間)

    context.clearRect(0, 0, stageW, stageH);
    context.lineWidth = 10;
    context.beginPath();
    context.strokeStyle = '#fff';

    [...Array(segmentNum).keys()].forEach((i) => {
      // X座標
      const x = (i / (segmentNum - 1)) * stageW;
      // ラジアン
      const rad = (i / segmentNum) * Math.PI + time;
      // Y座標
      const y = amplitude * Math.sin(rad) + stageH * 0.5;

      // 線を描く
      if (i === 0) {
        context.moveTo(x, y);
      } else {
        context.lineTo(x, y);
      }
    });

    context.stroke();
  }
}

import alea from 'alea';
import * as noise from 'simplenoise/perlin';
import { createNoise2D } from 'simplex-noise';

import SimpleLine from './SimpleLine';

noise.seed(Math.random());

export default class PerlinNoise extends SimpleLine {
  private readonly lineNum = 150; // ラインの数

  private readonly segmentNum = 150; // 分割数

  private noise2D = createNoise2D(alea(Math.random()));

  draw() {
    const { context, stageW, stageH, lineNum, segmentNum } = this;

    if (!context) {
      return;
    }

    const amplitude = stageH / 2; // 振幅
    const time = Date.now() / 4000; // 媒介変数(時間)

    context.clearRect(0, 0, stageW, stageH);
    context.lineWidth = 1;

    [...Array(lineNum).keys()].forEach((j) => {
      const coefficient = 50 + j;

      context.beginPath();
      context.strokeStyle = '#fff';

      [...Array(segmentNum).keys()].forEach((i) => {
        // X座標
        const x = (i / (segmentNum - 1)) * stageW;

        // 横軸の入力値
        const px = i / coefficient;
        // 時間の入力値
        const py = j / 50 + time;

        // Y座標
        const y = amplitude * noise.perlin2(px, py) + stageH * 0.5;

        // 線を描く
        if (i === 0) {
          context.moveTo(x, y);
        } else {
          context.lineTo(x, y);
        }
      });

      context.stroke();
    });
  }
}

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import CurveLine from '@script/CurveLine';
import PerlinNoise from '@script/PerlinNoise';
import PerlinNoiseD5 from '@script/PerlinNoiseD5';
import SimpleLine from '@script/SimpleLine';

import '@style/style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <canvas></canvas>
`;

const simpleLine = new SimpleLine(document.querySelector('canvas')!);
const curveLine = new CurveLine(document.querySelector('canvas')!);
const perlinNoise = new PerlinNoise(document.querySelector('canvas')!);
const perlinNoiseD5 = new PerlinNoiseD5(document.querySelector('#app')!);
perlinNoiseD5.init();

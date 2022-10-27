/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import CurveLine from '@script/CurveLine';
import CurveLineNoise from '@script/CurveLineNoise';
import CurveLineNoiseD5 from '@script/CurveLineNoiseD5';
import DifferenceClouds from '@script/DifferenceClouds';
import SimpleLine from '@script/SimpleLine';

import '@style/style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <canvas></canvas>
`;

const simpleLine = new SimpleLine(document.querySelector('canvas')!);
const curveLine = new CurveLine(document.querySelector('canvas')!);
const curveLineNoise = new CurveLineNoise(document.querySelector('canvas')!);
const curveLineNoiseD5 = new CurveLineNoiseD5(document.querySelector('#app')!);
const differenceClouds = new DifferenceClouds(document.querySelector('#app')!);
differenceClouds.init();

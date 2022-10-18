/* eslint-disable @typescript-eslint/no-unused-vars */
declare module 'simplenoise/perlin' {
  const noise = {
    seed: (num: number) => number,
    perlin2: (x: number, y: number) => number,
  };

  export = noise;
}

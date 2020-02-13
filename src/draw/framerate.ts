const times: number[] = [];
let fps = 0;

const drawFrameRate = (context: CanvasRenderingContext2D): void => {
  const now = performance.now();

  while (times.length > 0 && times[0] <= now - 1000) {
    times.shift();
  }

  times.push(now);
  fps = times.length;

  context.font = '24px sans-serif';
  context.fillStyle = '#FFFFFF';
  context.strokeStyle = '1px #000000';
  context.fillText(`${fps}`, 10, 30);
  context.strokeText(`${fps}`, 10, 30);
};

export default drawFrameRate;

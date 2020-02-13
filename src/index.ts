import createCanvas from './creator';
import drawFn from './draw';

const {canvas, context, width, height} = createCanvas();

document.body.append(canvas);

const draw = drawFn.bind(this, {context, width, height});

/* Setup the draw loop */
const drawLoop = (): void => {
  draw();
  window.requestAnimationFrame(drawLoop);
};

drawLoop();

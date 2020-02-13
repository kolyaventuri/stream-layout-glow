import createCanvas from './creator';

const {canvas, context, width, height} = createCanvas();

document.body.append(canvas);

context.fillStyle = '#000000';
context.fillRect(0, 0, width, height);

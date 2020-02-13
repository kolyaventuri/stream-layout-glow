import drawFrameRate from './framerate';

type Options = {
  context: CanvasRenderingContext2D;
  width: number;
  height: number;
};

const draw = ({context, width, height}: Options): void => {
  context.fillStyle = '#000000';
  context.fillRect(0, 0, width, height);

  /* DO THIS LAST */
  if ((window as any)._isDebug) {
    drawFrameRate(context);
  }
};

export default draw;

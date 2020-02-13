import drawFrameRate from './framerate';
import cutHoles from './holes';

type Options = {
  context: CanvasRenderingContext2D;
  width: number;
  height: number;
};

const draw = ({context, width, height}: Options): void => {
  /* Draw over everything */
  context.fillStyle = '#000000';
  context.fillRect(0, 0, width, height);

  cutHoles(width, context);

  /* DO THIS LAST */
  if ((window as any)._isDebug) {
    drawFrameRate(context);
  }
};

export default draw;

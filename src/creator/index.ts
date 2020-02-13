type CanvasItems = {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  width: number;
  height: number;
};

const canvasCreator = ({
  width = window.innerWidth,
  height = window.innerHeight,
  top = 0,
  left = 0
} = {}): CanvasItems => {
  const canvas = document.createElement('canvas');
  canvas.setAttribute('width', width.toString());
  canvas.setAttribute('height', height.toString());

  canvas.style.position = 'absolute';
  canvas.style.top = `${top}px`;
  canvas.style.left = `${left}px`;

  const context = canvas.getContext('2d');
  if (context === null) {
    throw new Error('Could not get context');
  }

  return {canvas, context, width, height};
};

export default canvasCreator;

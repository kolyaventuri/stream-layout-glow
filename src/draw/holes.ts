import {gameScreen} from '../constants/values';

const {
  x: gameX,
  y: gameY,
  ratio: gameRatio,
  widthPercentage: gameWidthPerc
} = gameScreen;

const cutHoles = (width: number, ctx: CanvasRenderingContext2D): void => {
  const gameWidthValue = gameWidthPerc * width;

  ctx.clearRect(gameX, gameY, gameWidthValue, gameWidthValue / gameRatio);
};

export default cutHoles;

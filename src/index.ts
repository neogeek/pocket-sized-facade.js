import {
  ContextOptions,
  ContextOptionsFunctionsKeys,
  ContextOptionsPropertiesKey,
} from './types';

const defaultContextOptions = {
  fillStyle: 'transparent',
  strokeStyle: 'transparent',
} as ContextOptions;

export const setContextOptions = (
  context: CanvasRenderingContext2D,
  options: ContextOptions = {}
) => {
  const mergedOptions = {
    ...defaultContextOptions,
    ...options,
  } as ContextOptions;

  for (const key in mergedOptions) {
    if (
      Array.isArray(
        mergedOptions[key as unknown as ContextOptionsFunctionsKeys]
      )
    ) {
      (context as any)[key](
        ...(mergedOptions[key as unknown as ContextOptionsFunctionsKeys] as any)
      );
    } else if (mergedOptions[key as unknown as ContextOptionsPropertiesKey]) {
      (context as any)[key] =
        mergedOptions[key as unknown as ContextOptionsPropertiesKey];
    }
  }
};

export const renderWithContextOptions = (
  context: CanvasRenderingContext2D,
  options: ContextOptions = {},
  callback: () => void = () => {}
) => {
  context.save();

  setContextOptions(context, options);

  callback();

  context.restore();
};

/**
 * Resize a canvas for HDPI screens.
 * @method
 * @param {object} context - The canvas context.
 * @param {number} ratio - Ratio to scale the canvas.
 */
export const resizeForHDPI = (
  context: CanvasRenderingContext2D,
  ratio: number = 2
) => {
  context.canvas.style.width = `${context.canvas.width}px`;
  context.canvas.style.height = `${context.canvas.height}px`;

  context.canvas.setAttribute('width', String(context.canvas.width * ratio));
  context.canvas.setAttribute('height', String(context.canvas.height * ratio));

  context.scale(ratio, ratio);
};

/**
 * Clears a canvas.
 * @method
 * @param {object} context - The canvas context.
 */
export const clearCanvas = (context: CanvasRenderingContext2D) =>
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);

/**
 * Draws a circle to a canvas.
 * @method
 * @param {object} context - The canvas context.
 * @param {number} x - X coordinate to position the circle.
 * @param {number} y - Y coordinate to position the circle.
 * @param {number} radius - The radius of the circle.
 * @param {object} options - Optional context properties to apply when drawing a circle.
 */
export const drawCircle = (
  context: CanvasRenderingContext2D,
  x: number = 0,
  y: number = 0,
  radius: number = 1,
  options: ContextOptions = {}
) =>
  renderWithContextOptions(context, options, () => {
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI, false);
    context.closePath();
    context.fill();
    context.stroke();
  });

/**
 * Draws an image to a canvas.
 * @method
 * @param {object} context - The canvas context.
 * @param {object} image - Reference to an HTML image element.
 * @param {number} x - X coordinate to position the image.
 * @param {number} y - Y coordinate to position the image.
 * @param {object} options - Optional context properties to apply when drawing a image.
 */
export const drawImage = (
  context: CanvasRenderingContext2D,
  image: HTMLImageElement,
  x: number = 0,
  y: number = 0,
  width: number = image.naturalWidth,
  height: number = image.naturalHeight,
  options: ContextOptions = {}
) =>
  renderWithContextOptions(context, options, () => {
    if (image.complete) {
      context.drawImage(image, x, y, width, height);
    }
  });

/**
 * Draws a line to a canvas.
 * @method
 * @param {object} context - The canvas context.
 * @param {number} x - X coordinate to position the line.
 * @param {number} y - Y coordinate to position the line.
 * @param {number} x1 - X coordinate where line starts.
 * @param {number} y1 - Y coordinate where line starts.
 * @param {number} x2 - X coordinate where line ends.
 * @param {number} y2 - Y coordinate where line ends.
 * @param {object} options - Optional context properties to apply when drawing a line.
 */
export const drawLine = (
  context: CanvasRenderingContext2D,
  x: number = 0,
  y: number = 0,
  x1: number = 0,
  y1: number = 0,
  x2: number = 0,
  y2: number = 0,
  options: ContextOptions = {}
) =>
  renderWithContextOptions(context, options, () => {
    context.translate(x, y);
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.closePath();
    context.stroke();
  });

/**
 * Draws a polygon to a canvas.
 * @method
 * @param {object} context - The canvas context.
 * @param {number} x - X coordinate to position the polygon.
 * @param {number} y - Y coordinate to position the polygon.
 * @param {number[][]} points - Multi-dimensional array of points used to render a polygon. Point arrays with 2 values is rendered as a line, 5 values is rendered as an arc and 6 values is rendered as a bezier curve.
 * @param {boolean} closed - Boolean to determine if the polygon should be self closing or not.
 * @param {object} options - Optional context properties to apply when drawing a polygon.
 */
export const drawPolygon = (
  context: CanvasRenderingContext2D,
  x: number = 0,
  y: number = 0,
  points: (
    | [
        cp1x: number,
        cp1y: number,
        cp2x: number,
        cp2y: number,
        x: number,
        y: number
      ]
    | [
        x: number,
        y: number,
        radius: number,
        startAngle: number,
        endAngle: number
      ]
    | [x: number, y: number]
  )[] = [],
  closed: boolean = true,
  options: ContextOptions = {}
) =>
  renderWithContextOptions(context, options, () => {
    context.translate(x, y);
    context.beginPath();
    points.map(point => {
      if (point.length === 6) {
        context.bezierCurveTo.apply(context, point);
      } else if (point.length === 5) {
        context.arc.apply(context, point);
      } else if (point.length === 2) {
        context.lineTo.apply(context, point);
      }
    });
    if (closed) {
      context.closePath();
    }
    context.fill();
    context.stroke();
  });

/**
 * Draws a rectangle to a canvas.
 * @method
 * @param {object} context - The canvas context.
 * @param {number} x - X coordinate to position the rectangle.
 * @param {number} y - Y coordinate to position the rectangle.
 * @param {number} width - The width of the rectangle.
 * @param {number} height - The height of the rectangle.
 * @param {object} options - Optional context properties to apply when drawing a rectangle.
 */
export const drawRect = (
  context: CanvasRenderingContext2D,
  x: number = 0,
  y: number = 0,
  width: number = 0,
  height: number = 0,
  options: ContextOptions = {}
) =>
  renderWithContextOptions(context, options, () => {
    context.fillRect(x, y, width, height);
    context.strokeRect(x, y, width, height);
  });

/**
 * Draws text to a canvas.
 * @method
 * @param {object} context - The canvas context.
 * @param {number} x - X coordinate to position the text.
 * @param {number} y - Y coordinate to position the text.
 * @param {string} text - Value of the text object.
 * @param {object} options - Optional context properties to apply when drawing text.
 */
export const drawText = (
  context: CanvasRenderingContext2D,
  x: number = 0,
  y: number = 0,
  text: string = '',
  options: ContextOptions = {}
) =>
  renderWithContextOptions(context, options, () => {
    context.fillText(text, x, y);
    context.strokeText(text, x, y);
  });

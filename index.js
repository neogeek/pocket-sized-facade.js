const defaultContextOptions = {
    fillStyle: 'transparent',
    strokeStyle: 'transparent'
};

export const setContextOptions = (context, options = {}) => {
    const mergedOptions = { ...defaultContextOptions, ...options };
    for (const key in mergedOptions) {
        if (Array.isArray(mergedOptions[key])) {
            context[key](...mergedOptions[key]);
        } else {
            context[key] = mergedOptions[key];
        }
    }
};

export const renderWithContextOptions = (
    context,
    options = {},
    callback = () => {}
) => {
    context.save();

    setContextOptions(context, options);

    callback();

    context.restore();
};

/**
 * Resize a canvas for HDPI screens.
 * @param {object} context - The canvas context.
 * @param {integer} ratio - Ratio to scale the canvas.
 */
export const resizeForHDPI = (context, ratio = 2) => {
    context.canvas.style.width = `${context.canvas.width}px`;
    context.canvas.style.height = `${context.canvas.height}px`;

    context.canvas.setAttribute('width', context.canvas.width * ratio);
    context.canvas.setAttribute('height', context.canvas.height * ratio);

    context.scale(ratio, ratio);
};

/**
 * Clears a canvas.
 * @param {object} context - The canvas context.
 */
export const clearCanvas = context =>
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

/**
 * Draws a circle to a canvas.
 * @param {object} context - The canvas context.
 * @param {integer} x - X coordinate to position the circle.
 * @param {integer} y - Y coordinate to position the circle.
 * @param {integer} integer - The radius of the circle.
 * @param {object} options - Optional context properties to apply when drawing a circle.
 */
export const drawCircle = (context, x = 0, y = 0, radius = 1, options = {}) =>
    renderWithContextOptions(context, options, () => {
        context.beginPath();
        context.arc(x, y, radius, 0, 2 * Math.PI, false);
        context.closePath();
        context.fill();
        context.stroke();
    });

/**
 * Draws an image to a canvas.
 * @param {object} context - The canvas context.
 * @param {integer} x - X coordinate to position the image.
 * @param {integer} y - Y coordinate to position the image.
 * @param {object} image - Reference to an HTML image element.
 * @param {object} options - Optional context properties to apply when drawing a image.
 */
export const drawImage = (
    context,
    x = 0,
    y = 0,
    image,
    width = image.naturalWidth,
    height = image.naturalHeight,
    options = {}
) =>
    renderWithContextOptions(context, options, () => {
        if (image.complete) {
            context.drawImage(image, x, y, width, height);
        }
    });

/**
 * Draws a line to a canvas.
 * @param {object} context - The canvas context.
 * @param {integer} x - X coordinate to position the line.
 * @param {integer} y - Y coordinate to position the line.
 * @param {integer} x1 - X coordinate where line starts.
 * @param {integer} y1 - Y coordinate where line starts.
 * @param {integer} x2 - X coordinate where line ends.
 * @param {integer} y2 - Y coordinate where line ends.
 * @param {object} options - Optional context properties to apply when drawing a line.
 */
export const drawLine = (
    context,
    x = 0,
    y = 0,
    x1 = 0,
    y1 = 0,
    x2 = 0,
    y2 = 0,
    options = {}
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
 * @param {object} context - The canvas context.
 * @param {integer} x - X coordinate to position the polygon.
 * @param {integer} y - Y coordinate to position the polygon.
 * @param {integer[][]} points - Multi-dimensional array of points used to render a polygon. Point arrays with 2 values is rendered as a line, 5 values is rendered as an arc and 6 values is rendered as a bezier curve.
 * @param {boolean} closed - Boolean to determine if the polygon should be self closing or not.
 * @param {object} options - Optional context properties to apply when drawing a polygon.
 */
export const drawPolygon = (
    context,
    x = 0,
    y = 0,
    points = [],
    closed = true,
    options = {}
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
 * @param {object} context - The canvas context.
 * @param {integer} x - X coordinate to position the rectangle.
 * @param {integer} y - Y coordinate to position the rectangle.
 * @param {integer} width - The width of the rectangle.
 * @param {integer} height - The height of the rectangle.
 * @param {object} options - Optional context properties to apply when drawing a rectangle.
 */
export const drawRect = (
    context,
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    options = {}
) =>
    renderWithContextOptions(context, options, () => {
        context.fillRect(x, y, width, height);
        context.strokeRect(x, y, width, height);
    });

/**
 * Draws text to a canvas.
 * @param {object} context - The canvas context.
 * @param {integer} x - X coordinate to position the text.
 * @param {integer} y - Y coordinate to position the text.
 * @param {string} text - Value of the text object.
 * @param {object} options - Optional context properties to apply when drawing text.
 */
export const drawText = (context, x = 0, y = 0, text = '', options = {}) =>
    renderWithContextOptions(context, options, () => {
        context.fillText(text, x, y);
        context.strokeText(text, x, y);
    });

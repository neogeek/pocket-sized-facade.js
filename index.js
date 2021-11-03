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

export const resizeForHDPI = (context, ratio = 2) => {
    context.canvas.style.width = `${context.canvas.width}px`;
    context.canvas.style.height = `${context.canvas.height}px`;

    context.canvas.setAttribute('width', context.canvas.width * ratio);
    context.canvas.setAttribute('height', context.canvas.height * ratio);

    context.scale(ratio, ratio);
};

export const clearCanvas = context =>
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

export const drawCircle = (context, x = 0, y = 0, radius = 1, options = {}) =>
    renderWithContextOptions(context, options, () => {
        context.beginPath();
        context.arc(x, y, radius, 0, 2 * Math.PI, false);
        context.closePath();
        context.fill();
        context.stroke();
    });

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
        points.map(([x, y]) => context.lineTo(x, y));
        if (closed) {
            context.closePath();
        }
        context.fill();
        context.stroke();
    });

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

export const drawText = (context, x = 0, y = 0, text = '', options = {}) =>
    renderWithContextOptions(context, options, () => {
        context.fillText(text, x, y);
        context.strokeText(text, x, y);
    });

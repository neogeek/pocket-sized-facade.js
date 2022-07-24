import { toMatchImageSnapshot } from 'jest-image-snapshot';

expect.extend({ toMatchImageSnapshot });

import { createCanvas, loadImage, registerFont } from 'canvas';

import 'canvas-5-polyfill';

import {
  clearCanvas,
  drawCircle,
  drawImage,
  drawLine,
  drawPath,
  drawPolygon,
  drawPolyline,
  drawRect,
  drawText,
} from '../src/index.js';

describe('pocket-size-facade.js', () => {
  it('drawCircle', async () => {
    const canvas = createCanvas(250, 250);
    const context = canvas.getContext('2d');

    clearCanvas(context);

    drawRect(context, 0, 0, canvas.width, canvas.height, 0, {
      fillStyle: '#fff',
    });

    drawCircle(context, 125, 125, 75, {
      fillStyle: '#F74E00',
      lineWidth: 10,
      strokeStyle: '#000070',
    });

    expect(canvas.toBuffer()).toMatchImageSnapshot();
  });

  it('drawImage (svg)', async () => {
    const canvas = createCanvas(250, 250);
    const context = canvas.getContext('2d');

    clearCanvas(context);

    drawRect(context, 0, 0, canvas.width, canvas.height, 0, {
      fillStyle: '#fff',
    });

    const image = await loadImage('./test/mocks/duckduckgo.svg');

    drawImage(context, image as unknown as HTMLImageElement, 25, 40);

    expect(canvas.toBuffer()).toMatchImageSnapshot();
  });

  it('drawLine', async () => {
    const canvas = createCanvas(250, 250);
    const context = canvas.getContext('2d');

    clearCanvas(context);

    drawRect(context, 0, 0, canvas.width, canvas.height, 0, {
      fillStyle: '#fff',
    });

    drawLine(context, 75, 125, 0, 0, 100, 0, {
      lineWidth: 10,
      strokeStyle: '#000070',
    });

    expect(canvas.toBuffer()).toMatchImageSnapshot();
  });

  it('drawPath', async () => {
    const canvas = createCanvas(250, 250);
    const context = canvas.getContext('2d');

    clearCanvas(context);

    drawRect(context, 0, 0, canvas.width, canvas.height, 0, {
      fillStyle: '#fff',
    });

    drawPath(
      context,
      'M128,88.0901699 L165.956504,115.667184 L151.45841,160.287731 L104.54159,160.287731 L90.0434961,115.667184 L128,88.0901699 Z',
      {
        lineWidth: 10,
        strokeStyle: '#000070',
      }
    );

    expect(canvas.toBuffer()).toMatchImageSnapshot();
  });

  it('drawPolygon', async () => {
    const canvas = createCanvas(250, 250);
    const context = canvas.getContext('2d');

    clearCanvas(context);

    drawRect(context, 0, 0, canvas.width, canvas.height, 0, {
      fillStyle: '#fff',
    });

    drawPolygon(
      context,
      75,
      75,
      [
        [5, 5],
        [90, 5],
        [90, 90],
        [5, 90],
      ],
      true,
      {
        fillStyle: '#F74E00',
        lineWidth: 10,
        strokeStyle: '#000070',
      }
    );

    expect(canvas.toBuffer()).toMatchImageSnapshot();
  });

  it('drawPolygon (bezier)', async () => {
    const canvas = createCanvas(250, 250);
    const context = canvas.getContext('2d');

    clearCanvas(context);

    drawRect(context, 0, 0, canvas.width, canvas.height, 0, {
      fillStyle: '#fff',
    });

    drawPolygon(
      context,
      15,
      75,
      [
        [20, 20],
        [20, 100, 200, 100, 200, 20],
      ],
      false,
      {
        lineWidth: 10,
        strokeStyle: '#000070',
      }
    );

    expect(canvas.toBuffer()).toMatchImageSnapshot();
  });

  it('drawPolygon (arc)', async () => {
    const canvas = createCanvas(250, 250);
    const context = canvas.getContext('2d');

    clearCanvas(context);

    drawRect(context, 0, 0, canvas.width, canvas.height, 0, {
      fillStyle: '#fff',
    });

    drawPolygon(context, 75, 100, [[50, 0, 50, 0, Math.PI]], false, {
      lineWidth: 10,
      strokeStyle: '#000070',
    });

    expect(canvas.toBuffer()).toMatchImageSnapshot();
  });

  it('drawPolyline (open)', async () => {
    const canvas = createCanvas(250, 250);
    const context = canvas.getContext('2d');

    clearCanvas(context);

    drawRect(context, 0, 0, canvas.width, canvas.height, 0, {
      fillStyle: '#fff',
    });

    drawPolyline(context, '100 75 175 75 175 175 75 175 75 100', false, {
      fillStyle: '#F74E00',
      lineWidth: 10,
      strokeStyle: '#000070',
    });

    expect(canvas.toBuffer()).toMatchImageSnapshot();
  });

  it('drawPolyline (closed)', async () => {
    const canvas = createCanvas(250, 250);
    const context = canvas.getContext('2d');

    clearCanvas(context);

    drawRect(context, 0, 0, canvas.width, canvas.height, 0, {
      fillStyle: '#fff',
    });

    drawPolyline(context, '100 75 175 75 175 175 75 175 75 100', true, {
      fillStyle: '#F74E00',
      lineWidth: 10,
      strokeStyle: '#000070',
    });

    expect(canvas.toBuffer()).toMatchImageSnapshot();
  });

  it('drawRect', async () => {
    const canvas = createCanvas(250, 250);
    const context = canvas.getContext('2d');

    clearCanvas(context);

    drawRect(context, 0, 0, canvas.width, canvas.height, 0, {
      fillStyle: '#fff',
    });

    drawRect(context, 75, 75, 100, 100, 10, {
      fillStyle: '#F74E00',
      lineWidth: 10,
      strokeStyle: '#000070',
    });

    expect(canvas.toBuffer()).toMatchImageSnapshot();
  });

  it('drawText', async () => {
    registerFont('./test/mocks/CascadiaCode.ttf', { family: 'CascadiaCode' });

    const canvas = createCanvas(250, 250);
    const context = canvas.getContext('2d');

    clearCanvas(context);

    drawRect(context, 0, 0, canvas.width, canvas.height, 0, {
      fillStyle: '#fff',
    });

    drawText(context, 20, 60, 'Hello, ', {
      fillStyle: '#000',
      font: 'italic 50px CascadiaCode',
    });

    drawText(context, 20, 120, 'world!', {
      fillStyle: '#000',
      font: 'italic 50px CascadiaCode',
    });

    expect(canvas.toBuffer()).toMatchImageSnapshot({
      failureThreshold: 0.01,
      failureThresholdType: 'percent',
    });
  });
});

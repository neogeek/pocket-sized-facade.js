import { toMatchImageSnapshot } from 'jest-image-snapshot';

expect.extend({ toMatchImageSnapshot });

import { createCanvas, loadImage } from 'canvas';

import {
  clearCanvas,
  drawCircle,
  drawImage,
  drawLine,
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
        [10, 10],
        [100, 10],
        [100, 100],
        [10, 100],
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
    const canvas = createCanvas(250, 250);
    const context = canvas.getContext('2d');

    clearCanvas(context);

    drawRect(context, 0, 0, canvas.width, canvas.height, 0, {
      fillStyle: '#fff',
    });

    drawText(context, 20, 60, 'Hello, ', {
      fillStyle: '#000',
      font: 'italic 50px Courier New',
    });

    drawText(context, 20, 120, 'world!', {
      fillStyle: '#000',
      font: 'italic 50px Courier New',
    });

    expect(canvas.toBuffer()).toMatchImageSnapshot();
  });
});

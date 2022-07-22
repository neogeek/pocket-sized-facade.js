# Pocket Sized Facade.js

> 💫 A functional, pocket sized version of Facade.js

## Install

```bash
$ npm install pocket-sized-facade.js
```

```html
<script
  type="module"
  src="https://unpkg.com/pocket-sized-facade.js@2.0.0/index.js"
></script>
<script type="module">
  import { clearCanvas } from 'https://unpkg.com/pocket-sized-facade.js@2.0.0/index.js';

  const canvas = document.querySelector('canvas');
  const context = canvas.getContext('2d');
</script>
```

## API

### `resizeForHDPI(context, ratio)`

```javascript
import { resizeForHDPI } from 'https://unpkg.com/pocket-sized-facade.js@2.0.0/index.js';

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

resizeForHDPI(context, 2);
```

### `clearCanvas(context)`

```javascript
import { clearCanvas } from 'https://unpkg.com/pocket-sized-facade.js@2.0.0/index.js';

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

clearCanvas(context);
```

### `drawCircle(context, x, y, radius, options)`

```javascript
import { drawCircle } from 'https://unpkg.com/pocket-sized-facade.js@2.0.0/index.js';

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

drawCircle(context, 250, 250, 25, {
  fillStyle: '#f00',
});
```

### `drawImage(context, x, y, image, width, height, options)`

```javascript
import { drawImage } from 'https://unpkg.com/pocket-sized-facade.js@2.0.0/index.js';

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const image = document.createElement('img');

image.setAttribute(
  'src',
  'https://duckduckgo.com/assets/logo_homepage.normal.v108.svg'
);

const draw = () => {
  drawImage(context, 250, 250, image);

  requestAnimationFrame(draw);
};

requestAnimationFrame(draw);
```

### `drawLine(context, x, y, x1, y1, x2, y2, options)`

```javascript
import { drawLine } from 'https://unpkg.com/pocket-sized-facade.js@2.0.0/index.js';

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

drawLine(context, 0, 0, 10, 10, 200, 10, {
  lineWidth: 10,
  strokeStyle: '#f00',
});
```

### `drawPath(context, d, options)`

```javascript
import { drawPath } from 'https://unpkg.com/pocket-sized-facade.js@2.0.0/index.js';

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

drawPath(
  context,
  'M128,88.0901699 L165.956504,115.667184 L151.45841,160.287731 L104.54159,160.287731 L90.0434961,115.667184 L128,88.0901699 Z',
  {
    lineWidth: 10,
    strokeStyle: '#f00',
  }
);
```

### `drawPolygon(context, x, y, points, closed, options)`

```javascript
import { drawPolygon } from 'https://unpkg.com/pocket-sized-facade.js@2.0.0/index.js';

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

drawPolygon(
  context,
  0,
  0,
  [
    [10, 10],
    [100, 10],
    [100, 100],
    [10, 100],
  ],
  true,
  {
    lineWidth: 10,
    strokeStyle: '#f00',
  }
);
```

### `drawPolyline(context, points, options)`

```javascript
import { drawPolyline } from 'https://unpkg.com/pocket-sized-facade.js@2.0.0/index.js';

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

drawPolyline(context, '23 23 233 233 233 23 23 23 23 233 233 233', {
  lineWidth: 10,
  strokeStyle: '#f00',
});
```

### `drawRect(context, x, y, width, height, radius, options)`

```javascript
import { drawRect } from 'https://unpkg.com/pocket-sized-facade.js@2.0.0/index.js';

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

drawRect(context, 10, 10, 100, 100, 5, {
  lineWidth: 10,
  strokeStyle: '#f00',
});
```

### `drawText(context, x, y, text, options)`

```javascript
import { drawText } from 'https://unpkg.com/pocket-sized-facade.js@2.0.0/index.js';

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

drawText(context, 20, 60, 'Hello, world!', {
  fillStyle: '#000',
  font: 'italic 50px Courier New',
});
```

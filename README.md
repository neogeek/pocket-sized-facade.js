# Pocket Sized Facade.js

> 💫 A functional, pocket sized version of Facade.js

## Install

```bash
$ npm install pocket-sized-facade.js
```

```html
<script
    type="module"
    src="https://unpkg.com/pocket-sized-facade.js@1.0.0/index.js"
></script>
<script type="module">
    import { clearCanvas } from 'https://unpkg.com/pocket-sized-facade.js@1.0.0/index.js';

    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');
</script>
```

## API

### `clearCanvas(context)`

```javascript
import { clearCanvas } from 'https://unpkg.com/pocket-sized-facade.js@1.0.0/index.js';

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

clearCanvas(context);
```

### `drawCircle(context, radius, x, y, options)`

```javascript
import { drawCircle } from 'https://unpkg.com/pocket-sized-facade.js@1.0.0/index.js';

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

drawCircle(context, 10, 250, 250, {
    fillStyle: '#f00'
});
```

### `drawImage(context, image, x, y, width, height, options)`

```javascript
import { drawImage } from 'https://unpkg.com/pocket-sized-facade.js@1.0.0/index.js';

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const image = document.createElement('img');

image.setAttribute(
    'src',
    'https://duckduckgo.com/assets/logo_homepage.normal.v108.svg'
);

const draw = () => {
    drawImage(context, image, 250, 250);

    requestAnimationFrame(draw);
};

requestAnimationFrame(draw);
```

### `drawLine(context, x1, y1, x2, y2, options)`

```javascript
import { drawLine } from 'https://unpkg.com/pocket-sized-facade.js@1.0.0/index.js';

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

drawLine(context, 10, 10, 200, 10, {
    lineWidth: 10,
    strokeStyle: '#f00'
});
```

### `drawPolygon(context, points, options)`

```javascript
import { drawPolygon } from 'https://unpkg.com/pocket-sized-facade.js@1.0.0/index.js';

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

drawPolygon(
    context,
    [
        [10, 10],
        [100, 10],
        [100, 100],
        [10, 100]
    ],
    {
        lineWidth: 10,
        strokeStyle: '#f00'
    }
);
```

### `drawRect(context, x, y, width, height, options)`

```javascript
import { drawRect } from 'https://unpkg.com/pocket-sized-facade.js@1.0.0/index.js';

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

drawRect(context, 10, 10, 100, 100, {
    lineWidth: 10,
    strokeStyle: '#f00'
});
```

### `drawText(context, text, x, y, options)`

```javascript
import { drawText } from 'https://unpkg.com/pocket-sized-facade.js@1.0.0/index.js';

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

drawText(context, 'Hello, world!', 20, 60, {
    fillStyle: '#000',
    font: 'italic 50px Courier New'
});
```

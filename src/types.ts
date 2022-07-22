export interface ContextOptions
  extends ContextOptionsFunctions,
    ContextOptionsProperties {}

export enum ContextOptionsPropertiesKey {
  shadowBlur = 'shadowBlur',
  shadowColor = 'shadowColor',
  shadowOffsetX = 'shadowOffsetX',
  shadowOffsetY = 'shadowOffsetY',
  direction = 'direction',
  font = 'font',
  textAlign = 'textAlign',
  textBaseline = 'textBaseline',
  fillStyle = 'fillStyle',
  strokeStyle = 'strokeStyle',
  lineCap = 'lineCap',
  lineDashOffset = 'lineDashOffset',
  lineJoin = 'lineJoin',
  lineWidth = 'lineWidth',
  miterLimit = 'miterLimit',
}

export interface ContextOptionsProperties {
  [ContextOptionsPropertiesKey.shadowBlur]?: number;
  [ContextOptionsPropertiesKey.shadowColor]?: string;
  [ContextOptionsPropertiesKey.shadowOffsetX]?: number;
  [ContextOptionsPropertiesKey.shadowOffsetY]?: number;

  [ContextOptionsPropertiesKey.direction]?: CanvasDirection;
  [ContextOptionsPropertiesKey.font]?: string;
  [ContextOptionsPropertiesKey.textAlign]?: CanvasTextAlign;
  [ContextOptionsPropertiesKey.textBaseline]?: CanvasTextBaseline;

  [ContextOptionsPropertiesKey.fillStyle]?:
    | string
    | CanvasGradient
    | CanvasPattern;
  [ContextOptionsPropertiesKey.strokeStyle]?:
    | string
    | CanvasGradient
    | CanvasPattern;

  [ContextOptionsPropertiesKey.lineCap]?: CanvasLineCap;
  [ContextOptionsPropertiesKey.lineDashOffset]?: number;
  [ContextOptionsPropertiesKey.lineJoin]?: CanvasLineJoin;
  [ContextOptionsPropertiesKey.lineWidth]?: number;
  [ContextOptionsPropertiesKey.miterLimit]?: number;
}

export enum ContextOptionsFunctionsKeys {
  fillRect = 'fillRect',
  strokeRect = 'strokeRect',
  fillText = 'fillText',
  strokeText = 'strokeText',
  beginPath = 'beginPath',
  fill = 'fill',
  stroke = 'stroke',
  arc = 'arc',
  arcTo = 'arcTo',
  bezierCurveTo = 'bezierCurveTo',
  closePath = 'closePath',
  ellipse = 'ellipse',
  lineTo = 'lineTo',
  moveTo = 'moveTo',
  quadraticCurveTo = 'quadraticCurveTo',
  rect = 'rect',
}

export interface ContextOptionsFunctions {
  [ContextOptionsFunctionsKeys.fillRect]?: [
    x: number,
    y: number,
    w: number,
    h: number
  ];
  [ContextOptionsFunctionsKeys.strokeRect]?: [
    x: number,
    y: number,
    w: number,
    h: number
  ];

  [ContextOptionsFunctionsKeys.fillText]?: [
    text: string,
    x: number,
    y: number,
    maxWidth?: number
  ];
  [ContextOptionsFunctionsKeys.strokeText]?: [
    text: string,
    x: number,
    y: number,
    maxWidth?: number
  ];

  [ContextOptionsFunctionsKeys.beginPath]?: [];
  [ContextOptionsFunctionsKeys.fill]?:
    | [fillRule?: CanvasFillRule]
    | [path: Path2D, fillRule?: CanvasFillRule];
  [ContextOptionsFunctionsKeys.stroke]?: [] | [path: Path2D];

  [ContextOptionsFunctionsKeys.arc]?: [
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number,
    counterclockwise?: boolean
  ];
  [ContextOptionsFunctionsKeys.arcTo]?: [
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    radius: number
  ];
  [ContextOptionsFunctionsKeys.bezierCurveTo]?: [
    cp1x: number,
    cp1y: number,
    cp2x: number,
    cp2y: number,
    x: number,
    y: number
  ];
  [ContextOptionsFunctionsKeys.closePath]?: [];
  [ContextOptionsFunctionsKeys.ellipse]?: [
    x: number,
    y: number,
    radiusX: number,
    radiusY: number,
    rotation: number,
    startAngle: number,
    endAngle: number,
    counterclockwise?: boolean
  ];
  [ContextOptionsFunctionsKeys.lineTo]?: [x: number, y: number];
  [ContextOptionsFunctionsKeys.moveTo]?: [x: number, y: number];
  [ContextOptionsFunctionsKeys.quadraticCurveTo]?: [
    cpx: number,
    cpy: number,
    x: number,
    y: number
  ];
  [ContextOptionsFunctionsKeys.rect]?: [
    x: number,
    y: number,
    w: number,
    h: number
  ];
}

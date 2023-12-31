"use strict";

// https://drafts.csswg.org/css-color-4/#named-color
const namedColors = {
  __proto__: null,
  aliceblue: [0xF0, 0xF8, 0xFF],
  antiquewhite: [0xFA, 0xEB, 0xD7],
  aqua: [0x00, 0xFF, 0xFF],
  aquamarine: [0x7F, 0xFF, 0xD4],
  azure: [0xF0, 0xFF, 0xFF],
  beige: [0xF5, 0xF5, 0xDC],
  bisque: [0xFF, 0xE4, 0xC4],
  black: [0x00, 0x00, 0x00],
  blanchedalmond: [0xFF, 0xEB, 0xCD],
  blue: [0x00, 0x00, 0xFF],
  blueviolet: [0x8A, 0x2B, 0xE2],
  brown: [0xA5, 0x2A, 0x2A],
  burlywood: [0xDE, 0xB8, 0x87],
  cadetblue: [0x5F, 0x9E, 0xA0],
  chartreuse: [0x7F, 0xFF, 0x00],
  chocolate: [0xD2, 0x69, 0x1E],
  coral: [0xFF, 0x7F, 0x50],
  cornflowerblue: [0x64, 0x95, 0xED],
  cornsilk: [0xFF, 0xF8, 0xDC],
  crimson: [0xDC, 0x14, 0x3C],
  cyan: [0x00, 0xFF, 0xFF],
  darkblue: [0x00, 0x00, 0x8B],
  darkcyan: [0x00, 0x8B, 0x8B],
  darkgoldenrod: [0xB8, 0x86, 0x0B],
  darkgray: [0xA9, 0xA9, 0xA9],
  darkgreen: [0x00, 0x64, 0x00],
  darkgrey: [0xA9, 0xA9, 0xA9],
  darkkhaki: [0xBD, 0xB7, 0x6B],
  darkmagenta: [0x8B, 0x00, 0x8B],
  darkolivegreen: [0x55, 0x6B, 0x2F],
  darkorange: [0xFF, 0x8C, 0x00],
  darkorchid: [0x99, 0x32, 0xCC],
  darkred: [0x8B, 0x00, 0x00],
  darksalmon: [0xE9, 0x96, 0x7A],
  darkseagreen: [0x8F, 0xBC, 0x8F],
  darkslateblue: [0x48, 0x3D, 0x8B],
  darkslategray: [0x2F, 0x4F, 0x4F],
  darkslategrey: [0x2F, 0x4F, 0x4F],
  darkturquoise: [0x00, 0xCE, 0xD1],
  darkviolet: [0x94, 0x00, 0xD3],
  deeppink: [0xFF, 0x14, 0x93],
  deepskyblue: [0x00, 0xBF, 0xFF],
  dimgray: [0x69, 0x69, 0x69],
  dimgrey: [0x69, 0x69, 0x69],
  dodgerblue: [0x1E, 0x90, 0xFF],
  firebrick: [0xB2, 0x22, 0x22],
  floralwhite: [0xFF, 0xFA, 0xF0],
  forestgreen: [0x22, 0x8B, 0x22],
  fuchsia: [0xFF, 0x00, 0xFF],
  gainsboro: [0xDC, 0xDC, 0xDC],
  ghostwhite: [0xF8, 0xF8, 0xFF],
  gold: [0xFF, 0xD7, 0x00],
  goldenrod: [0xDA, 0xA5, 0x20],
  gray: [0x80, 0x80, 0x80],
  green: [0x00, 0x80, 0x00],
  greenyellow: [0xAD, 0xFF, 0x2F],
  grey: [0x80, 0x80, 0x80],
  honeydew: [0xF0, 0xFF, 0xF0],
  hotpink: [0xFF, 0x69, 0xB4],
  indianred: [0xCD, 0x5C, 0x5C],
  indigo: [0x4B, 0x00, 0x82],
  ivory: [0xFF, 0xFF, 0xF0],
  khaki: [0xF0, 0xE6, 0x8C],
  lavender: [0xE6, 0xE6, 0xFA],
  lavenderblush: [0xFF, 0xF0, 0xF5],
  lawngreen: [0x7C, 0xFC, 0x00],
  lemonchiffon: [0xFF, 0xFA, 0xCD],
  lightblue: [0xAD, 0xD8, 0xE6],
  lightcoral: [0xF0, 0x80, 0x80],
  lightcyan: [0xE0, 0xFF, 0xFF],
  lightgoldenrodyellow: [0xFA, 0xFA, 0xD2],
  lightgray: [0xD3, 0xD3, 0xD3],
  lightgreen: [0x90, 0xEE, 0x90],
  lightgrey: [0xD3, 0xD3, 0xD3],
  lightpink: [0xFF, 0xB6, 0xC1],
  lightsalmon: [0xFF, 0xA0, 0x7A],
  lightseagreen: [0x20, 0xB2, 0xAA],
  lightskyblue: [0x87, 0xCE, 0xFA],
  lightslategray: [0x77, 0x88, 0x99],
  lightslategrey: [0x77, 0x88, 0x99],
  lightsteelblue: [0xB0, 0xC4, 0xDE],
  lightyellow: [0xFF, 0xFF, 0xE0],
  lime: [0x00, 0xFF, 0x00],
  limegreen: [0x32, 0xCD, 0x32],
  linen: [0xFA, 0xF0, 0xE6],
  magenta: [0xFF, 0x00, 0xFF],
  maroon: [0x80, 0x00, 0x00],
  mediumaquamarine: [0x66, 0xCD, 0xAA],
  mediumblue: [0x00, 0x00, 0xCD],
  mediumorchid: [0xBA, 0x55, 0xD3],
  mediumpurple: [0x93, 0x70, 0xDB],
  mediumseagreen: [0x3C, 0xB3, 0x71],
  mediumslateblue: [0x7B, 0x68, 0xEE],
  mediumspringgreen: [0x00, 0xFA, 0x9A],
  mediumturquoise: [0x48, 0xD1, 0xCC],
  mediumvioletred: [0xC7, 0x15, 0x85],
  midnightblue: [0x19, 0x19, 0x70],
  mintcream: [0xF5, 0xFF, 0xFA],
  mistyrose: [0xFF, 0xE4, 0xE1],
  moccasin: [0xFF, 0xE4, 0xB5],
  navajowhite: [0xFF, 0xDE, 0xAD],
  navy: [0x00, 0x00, 0x80],
  oldlace: [0xFD, 0xF5, 0xE6],
  olive: [0x80, 0x80, 0x00],
  olivedrab: [0x6B, 0x8E, 0x23],
  orange: [0xFF, 0xA5, 0x00],
  orangered: [0xFF, 0x45, 0x00],
  orchid: [0xDA, 0x70, 0xD6],
  palegoldenrod: [0xEE, 0xE8, 0xAA],
  palegreen: [0x98, 0xFB, 0x98],
  paleturquoise: [0xAF, 0xEE, 0xEE],
  palevioletred: [0xDB, 0x70, 0x93],
  papayawhip: [0xFF, 0xEF, 0xD5],
  peachpuff: [0xFF, 0xDA, 0xB9],
  peru: [0xCD, 0x85, 0x3F],
  pink: [0xFF, 0xC0, 0xCB],
  plum: [0xDD, 0xA0, 0xDD],
  powderblue: [0xB0, 0xE0, 0xE6],
  purple: [0x80, 0x00, 0x80],
  rebeccapurple: [0x66, 0x33, 0x99],
  red: [0xFF, 0x00, 0x00],
  rosybrown: [0xBC, 0x8F, 0x8F],
  royalblue: [0x41, 0x69, 0xE1],
  saddlebrown: [0x8B, 0x45, 0x13],
  salmon: [0xFA, 0x80, 0x72],
  sandybrown: [0xF4, 0xA4, 0x60],
  seagreen: [0x2E, 0x8B, 0x57],
  seashell: [0xFF, 0xF5, 0xEE],
  sienna: [0xA0, 0x52, 0x2D],
  silver: [0xC0, 0xC0, 0xC0],
  skyblue: [0x87, 0xCE, 0xEB],
  slateblue: [0x6A, 0x5A, 0xCD],
  slategray: [0x70, 0x80, 0x90],
  slategrey: [0x70, 0x80, 0x90],
  snow: [0xFF, 0xFA, 0xFA],
  springgreen: [0x00, 0xFF, 0x7F],
  steelblue: [0x46, 0x82, 0xB4],
  tan: [0xD2, 0xB4, 0x8C],
  teal: [0x00, 0x80, 0x80],
  thistle: [0xD8, 0xBF, 0xD8],
  tomato: [0xFF, 0x63, 0x47],
  turquoise: [0x40, 0xE0, 0xD0],
  violet: [0xEE, 0x82, 0xEE],
  wheat: [0xF5, 0xDE, 0xB3],
  white: [0xFF, 0xFF, 0xFF],
  whitesmoke: [0xF5, 0xF5, 0xF5],
  yellow: [0xFF, 0xFF, 0x00],
  yellowgreen: [0x9A, 0xCD, 0x32]
};

// Implements some of https://drafts.csswg.org/css-color-4/#resolving-sRGB-values and
// https://drafts.csswg.org/css-color-4/#serializing-sRGB-values, in a somewhat fragile way since
// we're not using a real parser/serializer. Attempts to cover:
// * hex colors
// * 'rgb()' and 'rgba()' values
// * named colors
// * 'transparent'

exports.getSpecifiedColor = color => {
  const lowercasedColor = color.toLowerCase();
  if (Object.hasOwn(namedColors, lowercasedColor) || lowercasedColor === "transparent") {
    return lowercasedColor;
  }

  return sharedSpecifiedAndComputedAndUsed(color);
};

exports.getComputedOrUsedColor = color => {
  const lowercasedColor = color.toLowerCase();
  const fromNamedColors = namedColors[lowercasedColor];
  if (fromNamedColors !== undefined) {
    return `rgb(${fromNamedColors.join(", ")})`;
  }

  if (lowercasedColor === "transparent") {
    return "rgba(0, 0, 0, 0)";
  }

  return sharedSpecifiedAndComputedAndUsed(color);
};

function sharedSpecifiedAndComputedAndUsed(color) {
  if (/^#[0-9A-Fa-f]{6}$/.test(color) || /^#[0-9A-Fa-f]{3}$/.test(color)) {
    return hexToRGB(color.slice(1));
  }

  if (/^#[0-9A-Fa-f]{8}$/.test(color) || /^#[0-9A-Fa-f]{4}$/.test(color)) {
    return hexToRGBA(color.slice(1));
  }

  if (/^rgba?\(/.test(color)) {
    return color.split(",").map(s => s.trim()).join(", ");
  }

  return color;
}

function hexToRGB(color) {
  if (color.length === 6) {
    const [r1, r2, g1, g2, b1, b2] = color.split("");

    return `rgb(${hexesToDecimals([r1, r2], [g1, g2], [b1, b2]).join(", ")})`;
  }

  if (color.length === 3) {
    const [r1, g1, b1] = color.split("");

    return `rgb(${hexesToDecimals([r1, r1], [g1, g1], [b1, b1]).join(", ")})`;
  }

  return "rgb(0, 0, 0)";
}

function hexToRGBA(color) {
  if (color.length === 8) {
    const [r1, r2, g1, g2, b1, b2, a1, a2] = color.split("");

    return `rgba(${hexesToDecimals([r1, r2], [g1, g2], [b1, b2]).join(", ")}, ${hexToPercent(a1, a2)})`;
  }

  if (color.length === 4) {
    const [r1, g1, b1, a1] = color.split("");

    return `rgba(${hexesToDecimals([r1, r1], [g1, g1], [b1, b1]).join(", ")}, ${hexToPercent(a1, a1)})`;
  }

  return "rgba(0, 0, 0, 1)";
}

function hexToDecimal(d1, d2) {
  return parseInt(d1, 16) * 16 + parseInt(d2, 16);
}

function hexesToDecimals(...hexes) {
  return hexes.map(pair => hexToDecimal(pair[0], pair[1]));
}

function hexToPercent(d1, d2) {
  return Math.floor(1000 * hexToDecimal(d1, d2) / 255) / 1000;
}

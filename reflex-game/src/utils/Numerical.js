export const TWO_PI = Math.PI * 2;
export const wrapAround = (v, min, max) => (v > max ? min : v < min ? max : v);
export const transformRange = (value, r1Min, r1Max, r2Min, r2Max) => {
  var scale = (r2Max - r2Min) / (r1Max - r1Min);
  return (value - r1Min) * scale;
};

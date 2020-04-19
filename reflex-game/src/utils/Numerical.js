const DEGREE_TO_PI_RATIO = Math.PI / 180;
export const TWO_PI = Math.PI * 2;

export const clamp = (v, min, max) => (v > max ? max : v < min ? min : v);
export const wrapAround = (v, min, max) => (v > max ? min : v < min ? max : v);
export const degreesToRadians = (degree) => DEGREE_TO_PI_RATIO * degree;


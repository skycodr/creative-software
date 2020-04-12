export const clamp = (value, min, max) =>
  value < min ? min : value > max ? max : value;

export const isDefined = (value) => value !== undefined && value !== null;

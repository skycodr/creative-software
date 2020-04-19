export const getOffsetPosition = ({ x, y }, size) => {
  const hSize = size >> 1;
  return {
    x: x - hSize,
    y: y - hSize,
  };
};

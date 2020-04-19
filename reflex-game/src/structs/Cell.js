/**
 *
 * @param {*} index index of the cell in the linear array
 * @param {*} size
 * @param {*} col
 * @param {*} row
 */
const Cell = (id, index, size, col, row) => {
  const c = size >> 1;
  const x = col * size;
  const y = row * size;
  const cx = x + c;
  const cy = y + c;

  return {
    id,
    index,
    size,
    pos: { x, y },
    cPos: { x: cx, y: cy },
  };
};

export default Cell;

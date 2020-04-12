const Cell = (index, size, col, row) => {
  const c = size >> 1;
  const x = col * size;
  const y = row * size;
  const cx = x + c;
  const cy = y + c;

  return {
    index,
    size,
    pos: { x, y },
    center: { x: cx, y: cy },
  };
};

export default Cell;

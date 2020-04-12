import Cell from './Cell';
import LinkedList from './LinkedList';

export default (gridSize, columnCount) => {
  const cellCount = columnCount * columnCount;
  const cellSize = gridSize / columnCount;
  const linkedList = LinkedList(({ id }) => id);
  let i = 0;
  while (i < cellCount) {
    const row = Math.floor(i / columnCount);
    const col = i % columnCount;
    const cell = Cell(i, cellSize, col, row);
    linkedList.add(cell);
    ++i;
  }

  return {
    list: linkedList,
    cells: linkedList.toArray(),
    size: gridSize,
  };
};

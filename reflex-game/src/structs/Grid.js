import Cell from './Cell';
import LinkedList from './LinkedList';

const Grid = (gridSize, columnCount) => {
  const cellCount = columnCount * columnCount;
  const cellSize = gridSize / columnCount;

  /**
   * Generate the matrix/grid from the data with
   * alternating id sequences
   */
  const matrix = (() => {
    const matrix = [];
    let cellIndex = 0;
    while (cellIndex < cellCount) {
      const rowIndex = Math.floor(cellIndex / columnCount);
      const isOdd = rowIndex % 2 === 1;

      // If the row is not defined create new row data
      if (!matrix[rowIndex]) {
        matrix.push([]);
      }

      const matrixRef = matrix[rowIndex];

      if (isOdd) {
        matrixRef.splice(0, 0, cellIndex);
      } else {
        matrixRef.splice(matrixRef.length, 0, cellIndex);
      }

      ++cellIndex;
    }

    return matrix;
  })();

  /**
   * Flatten the matrix to a linear array
   */
  const flattened = (() => {
    const flattened = [];

    matrix.forEach((row) => {
      flattened.push(...row);
    });
    return flattened;
  })();

  /**
   * Create Cell data structure from the flattened array
   *
   */
  const linkedList = (() => {
    const linkedList = LinkedList(({ id }) => id);

    const cells = flattened.map((cellId, index) => {
      const row = Math.floor(index / columnCount);
      const col = index % columnCount;
      return Cell(cellId, index, cellSize, col, row);
    });

    for (let i = 0; i < cells.length; i++) {
      const cell = cells[i];
      if (cell.id !== i) {
        const t = cells[cell.id];
        cells[i] = t;
        cells[cell.id] = cell;
      }
      linkedList.add(cells[i]);
    }
    
    return linkedList;
  })();

  return linkedList;
};

export default Grid;

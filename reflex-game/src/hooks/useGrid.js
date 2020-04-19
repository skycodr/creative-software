import { useState, useEffect } from 'react';
import { Grid } from '../structs';

const useGrid = (gridSize = 300, columnCount = 3) => {
  const [gridData, setGridData] = useState({
    cells: [],
    linkedList: null,
  });

  useEffect(() => {
    const linkedList = Grid(gridSize, columnCount);
    const cells = linkedList.toArray();
    setGridData({ ...gridData, cells, linkedList });
  }, []);

  const { cells, linkedList } = gridData;

  return [cells, linkedList, gridSize];
};

export default useGrid;

import React, { useEffect, useState } from 'react';

import { Grid, Oscillator } from './components';

import { GridStruct } from './structs';

import './styles/reset.css';

const { log } = console;

const init = () => {
  const data = GridStruct(300, 3);
  return data;
};

function App() {
  const [gridData, setGridData] = useState({
    size: 0,
    cells: [],
  });

  useEffect(() => {
    const data = init();
    setGridData(data);
  }, []);

  return (
    <>
      <Oscillator />
      <Grid dataSource={gridData} />
    </>
  );
}

export default App;

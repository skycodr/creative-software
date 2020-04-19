import React, { useState, useEffect } from 'react';

import { useGrid, useNode } from './hooks';

import { GridContainer } from './containers';
import { Grid, Oscillator, Player, Button, Score } from './components';

function App() {
  const [score, setScore] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [value, setValue] = useState(0);
  const [cells, linkedList, gridSize] = useGrid();
  const [node, setNode] = useNode(linkedList);

  const hOnUpdate = (x) => {
    setValue(Math.ceil(x));
  };

  const hOnClick = () => {
    // 1. Check the oscillators value against the threshold
    // 2. If it is within next
    // 3. If not reset()

    const v = value;

    if (value < 50 || value > 250) {
      // Reset will automatically move
      // the pointer to the head
      linkedList.reset();
    }

    const nextNode = linkedList.next();
    setNode(nextNode);
  };

  // Every time a node changes
  // Check if end state has reached
  useEffect(() => {
    if (node) {
      if (linkedList.isHead(node)) {
        setStartTime(Date.now());
      } else if (linkedList.isTail(node)) {
        const endTime = Date.now();
        const elapsedTime = (endTime - startTime) / 1000; // in seconds
        const newScore = Math.ceil(100 / elapsedTime);
        linkedList.reset();
        setNode(linkedList.next());
        setScore(score + newScore);
      }
    }
  }, [node]);

  return (
    <>
      <Score value={score} />
      <Oscillator size={gridSize} onUpdate={hOnUpdate} posX={value} />
      <GridContainer size={gridSize}>
        <Grid dataSource={cells} />
        <Player size={10} dataSource={node} />
      </GridContainer>
      <Button label="Advance" onClick={hOnClick} />
      <div>{value}</div>
    </>
  );
}

export default App;

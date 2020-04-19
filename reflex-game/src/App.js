import React, { useState, useEffect } from 'react';

import { useGrid, useNode } from './hooks';

import { GridContainer } from './containers';
import { Grid, Oscillator, Player, Button, Score } from './components';

const THRESHOLD = 200; // Threshold value the checked
const PLAYER_SIZE = 10; // Size of the player entity
const FPS = 30; // Fixed fps to run
const OSCILLATION_PERIOD = 60; // multiples of 30;
const DELAY_BEFORE_NEW_ROUND = 500; // Render screen before resetting in ms()
const GRID_SIZE = 300;
const COLUMN_COUNT = 3;

function App() {
  const [score, setScore] = useState(0);
  const [oscillationValue, setOscillationValue] = useState(0);

  const [startTime, setStartTime] = useState(null);

  const [cells, linkedList, gridSize] = useGrid(GRID_SIZE, COLUMN_COUNT);
  const [node, setNode] = useNode(linkedList);

  // Update oscillation value
  const hOnUpdate = (oValue) => setOscillationValue(oValue);

  // Find the next node
  const hOnClick = () => {
    const v = Math.abs(oscillationValue);

    if (v > THRESHOLD) {
      linkedList.reset();
    }

    const nextNode = linkedList.next();
    setNode(nextNode);
  };

  // Check game
  useEffect(() => {
    if (node) {
      if (linkedList.isHead(node)) {
        setStartTime(Date.now());
      } else if (linkedList.isTail(node)) {
        const endTime = Date.now();
        const elapsedTime = (endTime - startTime) / 1000; // in seconds
        const newScore = Math.ceil(100 / elapsedTime);
        setScore(score + newScore);
        setTimeout(() => {
          linkedList.reset();
          setNode(linkedList.next());
        }, DELAY_BEFORE_NEW_ROUND);
      }
    }
  }, [node]);

  return (
    <>
      <Score value={score} />
      <Oscillator
        size={gridSize}
        onUpdate={hOnUpdate}
        posX={oscillationValue}
        threshold={THRESHOLD}
        fps={FPS}
        period={OSCILLATION_PERIOD}
      />
      <GridContainer size={gridSize}>
        <Grid dataSource={cells} />
        <Player size={PLAYER_SIZE} dataSource={node} />
      </GridContainer>
      <Button label="Go!" onClick={hOnClick} />
    </>
  );
}

export default App;

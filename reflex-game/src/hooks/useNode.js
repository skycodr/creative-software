import { useState, useEffect } from 'react';

const useNode = (linkedList) => {
  const [node, setNode] = useState(null);

  useEffect(() => {
    if (linkedList) {
      const currentNode = linkedList.next();
      setNode(currentNode);
    }
  }, [linkedList]);

  return [node, setNode];
};

export default useNode;

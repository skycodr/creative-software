/*
-----------------------------
Simple linked list
-----------------------------
*/

const Node = (id, value, nextId) => ({
  id,
  value,
  nextId,
});

const LinkedList = (idExtractor) => {
  const cache = {};
  let head = null;
  let tail = null;
  let pointer = null;
  const array = [];

  return {
    /**
     * Add a value to the list
     *
     * @param {object} value Object to be stored
     */
    add: (value) => {
      const node = Node(idExtractor(value), value, null);
      if (head === null) {
        head = node;
        tail = head;
        pointer = head.id;
      } else {
        tail.nextId = node.id;
        tail = node;
      }
      cache[node.id] = node;
      array.push(node);
    },
    /**
     * Resets the pointer to the head
     *
     */
    reset: () => {
      pointer = head.id;
    },
    /**
     * Returns the next node in the list
     *
     */
    next: () => {
      const node = cache[pointer] || null;
      pointer = (node && node.nextId) || null;
      return node;
    },

    isHead: ({ id }) => head.id === id,

    isTail: ({ id }) => tail.id === id,

    /**
     * Linked list in as an array
     *
     */
    toArray: () => array,
  };
};

export default LinkedList;

import { useState } from "react";

const Node = ({ value, next, isTail }) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
        <span className="text-white">{value}</span>
      </div>
      {!isTail && <div className="w-1 h-5 bg-gray-300"></div>}
    </div>
  );
};
const LinkedList = () => {
  const [head, setHead] = useState(null);

  const addNode = () => {
    const newNode = { value: Math.floor(Math.random() * 100), next: head };
    setHead(newNode);
  };

  const renderNodes = () => {
    let current = head;
    const nodes = [];
    while (current) {
      nodes.push(
        <Node key={current.value} value={current.value} next={current.next} />
      );
      current = current.next;
    }
    return nodes;
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <h1 className="text-2xl font-bold mb-4">Linked List</h1>
      <div className="flex items-center space-x-2">
        {head && renderNodes()}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={addNode}
        >
          Add Node
        </button>
      </div>
    </div>
  );
};

export default LinkedList;

import React from 'react';

function Tooltip({ text }) {
  return (
    <div className="absolute rounded-sm bg-white text-black border border-gray-300 p-2 shadow-md">
      {text}
    </div>
  );
}

export default Tooltip;

import React, { useState } from 'react';
import Tooltip from '../Tooltip/Tooltip';  // Adjust the import path as necessary

function MegaMenu({setCurrentView}) {
  const [hoveredText, setHoveredText] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (event, text) => {
    const { clientX: x, clientY: y } = event;
    setTooltipPosition({ x, y });
    setHoveredText(text);
  };

  const handleMouseLeave = () => {
    setHoveredText(null);
  };

  return (
    <div className="bg-[#fffbf8] py-1 relative">
      <div className="container mx-auto flex justify-center space-x-8">
        {['HARAA',, 'NECKLACE', 'RINGS', 'SETS', 'BANGLES', 'EARRINGS', 'GOLD WAISTBELT'].map((item) => (
          <a
            key={item}
            href="#"
            className="text-gray-700 hover:text-gray-900 text-sm font-roboto font-semibold relative"
            // onMouseEnter={(e) => handleMouseEnter(e, item)}
            // onMouseLeave={handleMouseLeave}
            onClick={() => setCurrentView('Products')}
          >
            {item}
            {hoveredText === item && (
              <div
                className="absolute z-10"
                style={{ top: '100%', transform: 'translateX(-50%)', marginTop: '8px' }}
              >
                <Tooltip text={hoveredText} />
              </div>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}

export default MegaMenu;

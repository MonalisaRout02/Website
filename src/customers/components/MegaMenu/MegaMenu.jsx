import React, { useState } from 'react';
import Tooltip from '../Tooltip/Tooltip';  // Adjust the import path as necessary

function MegaMenu() {
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
    <div className="bg-[#fffbf8] py-2 relative">
      <div className="container mx-auto flex justify-center space-x-8">
        {['GOLD', 'DIAMOND', 'NECKLACE', 'RINGS', 'BESTSELLER', 'ALL JEWELLERY', 'COLLECTIONS', 'WEDDING', 'GIFTING'].map((item) => (
          <a
            key={item}
            href="#"
            className="text-gray-700 hover:text-gray-900 text-sm font-roboto font-semibold relative"
            onMouseEnter={(e) => handleMouseEnter(e, item)}
            onMouseLeave={handleMouseLeave}
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

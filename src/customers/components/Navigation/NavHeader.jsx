import React, { useState, useEffect } from 'react';

function NavHeader({ messages }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsSliding(true);
      setTimeout(() => {
        setIsSliding(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
      }, 500); // Duration of the slide-up animation
    }, 3000); // Change the message every 3 seconds

    return () => clearInterval(intervalId);
  }, [messages.length]);

  return (
    <div className="bg-stone-900 py-1 text-center h-6 overflow-hidden relative">
      <div className={`absolute inset-0 text-orange-300 font-roboto text-sm italic transition-all ${isSliding ? 'animate-slideUpOut' : 'animate-slideUpIn'}`}>
        {messages[currentIndex]}
      </div>
    </div>
  );
}

export default NavHeader;

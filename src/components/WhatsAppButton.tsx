import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  
  useEffect(() => {
    // Show tooltip after 3 seconds, then hide after 7 seconds
    const showTooltipTimeout = setTimeout(() => {
      setIsVisible(true);
      
      setTimeout(() => {
        setIsTooltipVisible(true);
        
        setTimeout(() => {
          setIsTooltipVisible(false);
        }, 7000);
      }, 3000);
    }, 3000);
    
    return () => {
      clearTimeout(showTooltipTimeout);
    };
  }, []);
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed right-6 bottom-6 z-50">
      {isTooltipVisible && (
        <div className="absolute bottom-16 right-0 bg-white p-4 rounded-lg shadow-lg max-w-xs mb-2 animate-fade-in">
          <button 
            onClick={() => setIsTooltipVisible(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            <X size={16} />
          </button>
          <p className="text-gray-800">
            Try our demo on WhatsApp! Chat with PolicyChat just like you would after signing up.
          </p>
          <div className="absolute w-4 h-4 bg-white transform rotate-45 right-6 -bottom-2"></div>
        </div>
      )}
      
      <a
        href="https://wa.me/1234567890?text=I'd%20like%20to%20try%20PolicyChat"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-105"
        onMouseEnter={() => setIsTooltipVisible(true)}
        onMouseLeave={() => setIsTooltipVisible(false)}
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
};

export default WhatsAppButton;
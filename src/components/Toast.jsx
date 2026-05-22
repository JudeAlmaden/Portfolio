import React from 'react';

export default function Toast({ message, visible }) {
  return (
    <div
      id="toast-notification"
      className={`fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/10 text-white px-6 py-3 rounded-full text-sm font-medium shadow-xl transition-all duration-300 z-50 ${
        visible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      {message}
    </div>
  );
}

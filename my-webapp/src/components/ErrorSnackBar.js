import React, { useEffect } from 'react';

const ErrorSnackBar = ({ message, visible, onClose }) => {

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  return (
    <div className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'} bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2`}>
      <span>{message}</span>
      <button onClick={() => {
        onClose()
        }} className="focus:outline-none">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
  );
};

export default ErrorSnackBar;
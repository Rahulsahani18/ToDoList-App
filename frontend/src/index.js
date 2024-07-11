
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import ReactDOM's createRoot method
import './index.css'; // Import CSS styles
import App from './App'; // Import the root component of your application

// Create a root React element using ReactDOM's createRoot method and specify the DOM element to render into
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the root React element into the specified DOM element
root.render(
  // Use React.StrictMode to enable additional checks and warnings for potential issues in your application
  <React.StrictMode>
    {/* Render the root component of your application */}
    <App />
  </React.StrictMode>
);

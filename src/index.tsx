import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import StarrailDrive from 'StarrailDrive';
import './index.css';

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <StrictMode>
      <StarrailDrive />
    </StrictMode>
  );
}

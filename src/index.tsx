import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import StarrailDrive from 'StarrailDrive';
import './index.css';

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(
    <StrictMode>
      <StarrailDrive />
    </StrictMode>
  );
}

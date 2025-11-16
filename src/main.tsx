import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App'; // make sure App.tsx, not App.jsx

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

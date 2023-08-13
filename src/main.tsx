import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './assets/css/simple-line-icons/simple-line-icons.css';
import './index.css';

import App from './App';
import ScrollButton from './components/ScrollButton';

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <ScrollButton />
    </BrowserRouter>
  </StrictMode>
);

import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { StrictMode } from 'react';
import './index.css';
import ThemeContextProvider from './contexts/ThemeContext'
ReactDOM.render(
    <StrictMode>
      <ThemeContextProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <App/>
        </Suspense>
      </ThemeContextProvider>
    </StrictMode>,
    document.getElementById('app')
);
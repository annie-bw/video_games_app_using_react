// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Provider from './components/ui/provider';
import theme from "./components/ui/theme";
import { ColorModeScript } from '@chakra-ui/react';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider >
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </Provider>
  </React.StrictMode>
);

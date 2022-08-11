import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { createRoot } from 'react-dom/client';
import client from './apollo/client';
import App from './App';
import './index.css';

const root = document.querySelector('#root') as HTMLDivElement;

createRoot(root).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

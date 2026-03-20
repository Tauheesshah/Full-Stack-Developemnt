import { createRoot } from 'react-dom/client';
import { App } from './App.jsx';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { ownStore } from './Store/Store.js';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={ownStore}>
      <App />
    </Provider>
  </BrowserRouter>,
);

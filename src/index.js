import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global, ThemeProvider } from '@emotion/react';
import 'modern-normalize';

import { App } from 'components';
import { GlobalStyles, theme } from 'styles';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
        <Global styles={GlobalStyles} />
          <App />
          </PersistGate>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

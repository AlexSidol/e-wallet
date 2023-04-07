import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import 'styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from 'styles/theme';
import Media from 'components/Media/Media';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/e-wallet">
        <ChakraProvider theme={theme}>
          <Media>
            <PersistGate loading={null} persistor={persistor}>
              <App />
            </PersistGate>
          </Media>
        </ChakraProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

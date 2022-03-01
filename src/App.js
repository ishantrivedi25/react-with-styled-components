import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Routing from "./routes/router";
import { persistor, store } from "./redux/store";
import { ErrorBoundary } from "./pages/index";
import { Header } from "./components/index";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ErrorBoundary>
          <BrowserRouter>
            <Header />
            <Routing />
          </BrowserRouter>
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  );
}

export default App;

import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './Routes';
import Header from './components/Header';
import GlobalStyle from './styles/global';
import history from './services/history';

function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyle />
    </Router>
  );
}

export default App;

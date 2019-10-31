import React, { PureComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './globalstyle.css';
import Layout from './layout/Layout';

class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );
  }
}

export default App;

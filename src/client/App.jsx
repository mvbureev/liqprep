import React, { PureComponent, StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import listStore from './store';
import Layout from './layout/Layout';
import './globalstyle.css';

class App extends PureComponent {
  render() {
    return (
      <StrictMode>
        <Provider listStore={...listStore}>
          <BrowserRouter>
            <Layout />
          </BrowserRouter>
        </Provider>
      </StrictMode>
    );
  }
}

export default App;

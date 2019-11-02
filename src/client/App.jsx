import React, { PureComponent, StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import stores from './store';
import Layout from './layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globalstyle.css';

class App extends PureComponent {
  render() {
    return (
      <StrictMode>
        <Provider {...stores}>
          <BrowserRouter>
            <Layout className="App" />
          </BrowserRouter>
        </Provider>
      </StrictMode>
    );
  }
}

export default App;

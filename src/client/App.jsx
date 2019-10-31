import React, { PureComponent } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/HomePage';
import './globalstyle.css';

class App extends PureComponent {
  render() {
    const RootApp = () => (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
    return (
      <BrowserRouter>
        <Switch>
          <RootApp />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

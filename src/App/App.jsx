import React, { PureComponent } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import TestPage from '../pages/TestPage';

class App extends PureComponent {
  render() {
    return (
      <Router>
        <TestPage />
      </Router>
    );
  }
}

export default App;

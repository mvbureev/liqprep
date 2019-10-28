// import React, { PureComponent } from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import TestPage from './pages/TestPage';

// class App extends PureComponent {
//   render() {
//     return (
//       <BrowserRouter>
//         <TestPage />
//       </BrowserRouter>
//     );
//   }
// }

// export default App;

import React, { PureComponent } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/HomePage';

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

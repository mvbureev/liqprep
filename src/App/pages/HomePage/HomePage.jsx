import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';


class Home extends PureComponent {
  render() {
    return (
      <div className="App">
        <h1>Project Home</h1>
        {/* Link to List.js */}
        <Link to="./list">
          <button variant="raised" type="button">
            My List
          </button>
        </Link>
      </div>
    );
  }
}
export default Home;

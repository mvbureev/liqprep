import React, { Component } from 'react';

class List extends Component {

  render() {
    const { apiResponse } = this.state;
    return (
      <div className="App">
        <p className="App-intro">{apiResponse}</p>
      </div>
    );
  }
}

export default List;

import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: '',
    };
  }

  componentDidMount() {
    this.callAPI();
  }

  callAPI() {
    fetch('http://localhost:8080/testAPI')
      .then((res) => res.text())
      .then((apiResponse) => this.setState({
        apiResponse,
      }));
  }

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

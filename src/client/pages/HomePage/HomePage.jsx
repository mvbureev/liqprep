import React, { PureComponent } from 'react';
import { observer, inject } from 'mobx-react';

class List extends PureComponent {
  render() {
    const { testStore } = this.props;
    return (
      <div>
        Home
      </div>
    );
  }
}

export default inject('testStore')(observer(List));

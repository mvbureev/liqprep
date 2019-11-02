import React, { PureComponent } from 'react';

class Footer extends PureComponent {
  render() {
    return (
      <footer className="footer">
      iburey@ya.ru
        <br />
        &copy;
        {' '}
        {new Date().getFullYear()}
        {' '}
        Bureev Maxim
      </footer>
    );
  }
}

export default Footer;

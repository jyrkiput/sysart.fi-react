import React, { Component } from 'react';
import { Link } from 'react-router';

/* component styles */
import { styles } from './styles.scss';

const sysartLogo = require('./files/logo.png');


export class Header extends Component {
  render() {
    return (
      <header className={`${styles}`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-5 col-sm-3 col-md-3 col-lg-3 logo">
              <Link to="/">
                <img src={sysartLogo} />
              </Link>
            </div>

            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
              <nav>
                <Link to="/home" activeClassName="active">
                  Palvelut
                </Link>
                <Link to="/list" activeClassName="active">
                  Asiakkaat
                </Link>
                <Link to="/list" activeClassName="active">
                  Työpaikat
                </Link>
                <Link to="/list" activeClassName="active">
                  Me
                </Link>
                <Link to="/list" activeClassName="active">
                  Blogi
                </Link>
                <Link to="/list" activeClassName="active">
                  Yhteystiedot
                </Link>
              </nav>
            </div>

          </div>
        </div>
      </header>
    );
  }
}

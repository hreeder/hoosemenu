import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getMenu } from './actions/menu';
import MainItem from './components/mains';
import DessertItem from './components/desserts';
import OptionsPanel from './components/options';
import Receipt from './components/receipt';


class App extends Component {
  componentDidMount() {
    this.props.getMenu();
  }

  render() {
    return (
      <div className="App">
        <header>
          <div className="container">
            <h2>WTF SHOULD I HAVE TO EAT <small>AT THE AULD HOOSE</small></h2>
          </div>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <MainItem />
              <hr />
              <DessertItem />
            </div>
            <div className="col-md-3">
              <OptionsPanel />
              <hr />
              <Receipt />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect((store) => {
  return {}
}, (dispatch) => bindActionCreators({
  getMenu: getMenu
}, dispatch))(App);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { setMenuItem } from '../actions/tab'


class DessertItem extends Component {
  clickNewDessert() {
    this.props.setMenuItem("SET_DESSERT", this.props.menu.desserts, this.props.prefs.diet);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <h3>DESSERT <small>YOU WANT SUGAR WITH THAT?</small></h3>
          {this.props.dessert !== null &&
            <div>
              <p>YOU SHOULD HAVE:</p>
              <h2>{this.props.dessert.name} <span className="pull-right">£{this.props.dessert.price}</span></h2>
            </div>
          }
          <p className="pull-right">
            <a onClick={event => this.clickNewDessert(event)} className="btn btn-info">GIMME SOME SUGAR</a>
          </p>
        </div>
      </div>
    )
  }
}

export default connect((store) => {
  return {
    menu: store.menu,
    dessert: store.tab.dessert,
    prefs: store.preferences
  }
}, (dispatch) => bindActionCreators({
    setMenuItem: setMenuItem
}, dispatch))(DessertItem);
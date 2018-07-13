import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { setMenuItem, setToppings } from '../actions/tab'


class MainItem extends Component {
  clickNewMain() {
    this.props.setMenuItem("SET_MAIN", this.props.menu.mains, this.props.prefs.diet);
  }

  clickNewTopping() {
    let availableToppings = this.props.menu.toppings[this.props.main.toppings];
    this.props.setMenuItem("ADD_TOPPING", availableToppings, this.props.prefs.diet);
  }

  removeTopping(event) {
    let indexToRemove = event.target.attributes.getNamedItem('data-key').value;
    let toppings = [...this.props.toppings];
    toppings.splice(indexToRemove, 1);
    this.props.setToppings(toppings);
  }

  render() {
    let toppingButton = "",
        price = this.props.main.price,
        displayToppings = null;
    if (this.props.main.toppings != null) {
      toppingButton = (<a onClick={event => this.clickNewTopping(event)} className="btn btn-success">I WANT SOMETHING ON TOP</a>);
    }

    if (this.props.main.toppings) {
      let selectedToppings = (
        <ul>
          {this.props.toppings.map((topping, idx) => {
            price += parseFloat(topping.price);
            return <li key={idx}>{topping.name}&nbsp;<a data-key={idx} onClick={event => this.removeTopping(event)}>&times;</a></li>
          })}
        </ul>
      );
      displayToppings = <div className="toppings">
        {selectedToppings}
      </div>
    }

    price = price.toFixed(2);

    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <h3>MAIN <small>GET SOME FOOD IN YOU!</small></h3>
            <p>YOU SHOULD HAVE:</p>
            <h2>{this.props.main.name} <span className="pull-right">£{price}</span></h2>
          </div>
        </div>
        <div className="row">
          <p className="pull-right">
            {toppingButton}
            <a onClick={event => this.clickNewMain(event)} className="btn btn-primary">I DON'T LIKE THAT</a>
          </p>
          {displayToppings}
        </div>
      </div>
    )
  }
}

export default connect((store) => {
  return {
    menu: store.menu,
    main: store.tab.main,
    toppings: store.tab.toppings,
    prefs: store.preferences
  }
}, (dispatch) => bindActionCreators({
    setMenuItem: setMenuItem,
    setToppings: setToppings
}, dispatch))(MainItem);
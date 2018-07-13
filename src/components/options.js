import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { setMenuItem } from '../actions/tab';
import { setDiet } from '../actions/preferences';

class OptionsPanel extends React.Component {
  handleDietChange(changeEvent) {
    let new_diet = changeEvent.target.value;
    this.props.setDiet(new_diet);
    this.props.setMenuItem("SET_MAIN", this.props.menu.mains, new_diet);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="radio">
            <label>
              <input
                type="radio"
                name="options"
                id="optionsNone"
                value="all"
                onChange={event => this.handleDietChange(event)}
                checked={this.props.prefs.diet === "all"} /> &lt;None&gt;
            </label>
            <br/>
            <label>
              <input
                type="radio"
                name="options"
                id="optionsMeat"
                value="meat"
                onChange={event => this.handleDietChange(event)}
                checked={this.props.prefs.diet === "meat"} /> MEAT IS LOVE, MEAT IS LIFE
            </label>
            <br/>
            <label>
              <input
                type="radio"
                name="options"
                id="optionsVeggie"
                value="vegetarian"
                onChange={event => this.handleDietChange(event)}
                checked={this.props.prefs.diet === "vegetarian"} /> I DON'T WANT MEAT
            </label>
            <br/>
            <label>
              <input
                type="radio"
                name="options"
                id="optionsVegan"
                value="vegan"
                onChange={event => this.handleDietChange(event)}
                checked={this.props.prefs.diet === "vegan"} /> I DON'T WANT ANY ANIMAL PRODUCTS
            </label>
          </div>
        </div>
      </div>
    )
  }
}

export default connect((store) => {
  return {
    menu: store.menu,
    prefs: store.preferences
  }
}, (dispatch) => bindActionCreators({
  setDiet: setDiet,
  setMenuItem: setMenuItem
}, dispatch))(OptionsPanel);
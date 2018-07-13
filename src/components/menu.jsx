var React = require('react');
var ReactDOM = require('react-dom');

var MainItem = require('./mains');
var DessertItem = require('./desserts');
var OptionsPanel = require('./options');
var Receipt = require('./receipt');

var App = React.createClass({
  componentDidMount: function() {
    $.ajax({
      url: "/menu.json",
      dataType: 'json',
      success: function(data) {
        this.setState({menu: data});
        this.getNewMain();
      }.bind(this),
      error: function(xhr, status, error) {
        console.log("Wasn't able to retrieve the menu json");
      }.bind(this)
    })
  },
  validateItem: function(item) {
    var opts = this.state.options;

    if (!this.validateWithoutMeat(item)) {
      return false;
    }

    if (opts['diet'] == "meat" && item['vegetarian']) {
      return false;
    }

    return true;
  },
  validateWithoutMeat: function(item) {
    var opts = this.state.options;

    if (opts['diet'] == "veggie" && !item['vegetarian']) {
      return false;
    }

    if (opts['diet'] == "vegan" && !item['vegan']) {
      return false;
    }

    return true;
  },
  getNewMain: function() {
    var mains = this.state.menu['mains'].filter(this.validateItem),
        chosen = mains[~~(Math.random()*mains.length)];

    while (chosen == this.state.chosenMain && mains.length > 1) {
      chosen = mains[~~(Math.random()*mains.length)];
    }

    this.setState({chosenMain: chosen, chosenToppings: []});
  },
  getNewDessert: function() {
    var desserts = this.state.menu['desserts'].filter(this.validateWithoutMeat),
        chosen = desserts[~~(Math.random()*desserts.length)];

    while (chosen == this.state.chosenMain && desserts.length > 1) {
      chosen = desserts[~~(Math.random()*desserts.length)];
    }

    this.setState({chosenDessert: chosen});
  },
  getNewTopping: function() {
    var main = this.state.chosenMain;
    if (main.hasOwnProperty("toppings")) {
      var key = main['toppings'],
          toppings = this.state.menu['toppings'][key].filter(this.validateWithoutMeat),
          // Read the ~~ as Math.floor
          // Essentially we're getting a random entry from toppings
          chosen = toppings[~~(Math.random()*toppings.length)];

      var current = this.state.chosenToppings;
      current.push(chosen);
      this.setState({chosenToppings: current});
    }
  },
  deleteTopping: function(idx) {
    var toppings = this.state.chosenToppings;
    toppings.splice(idx, 1);
    this.setState({chosenToppings: toppings});
  },
  getSkeleton: function() {
    return {name: "", price: 0, vegetarian: false, vegan: true};
  },
  getInitialState: function() {
    return {
      menu: {},
      chosenMain: this.getSkeleton(),
      chosenToppings: [],
      chosenDessert: this.getSkeleton(),
      options: {diet: "none"}
    }
  },
  setOptions: function(opts) {
    this.setState({options: opts});
    this.getNewMain();
  },
  render: function() {
    return (
      <div id="app">
        <div className="row">
          <div className="col-md-9">
            <MainItem clickMain={this.getNewMain}
                      clickTopping={this.getNewTopping}
                      delTopping={this.deleteTopping}
                      chosen={this.state.chosenMain}
                      toppings={this.state.chosenToppings}></MainItem>
            <hr/>
            <DessertItem clickDessert={this.getNewDessert} chosen={this.state.chosenDessert}></DessertItem>
          </div>
          <div className="col-md-3">
            <OptionsPanel opts={this.state.options} update={this.setOptions}></OptionsPanel>
            <hr/>
            <Receipt main={this.state.chosenMain}
                     toppings={this.state.chosenToppings}
                     dessert={this.state.chosenDessert}></Receipt>
          </div>
        </div>
      </div>
    )
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('appContainer')
);

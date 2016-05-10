var React = require('react');

var MainItem = React.createClass({
  handleDeleteTopping: function(idx) {
    this.props.delTopping(idx);
  },
  render: function() {
    var price = parseFloat(this.props.chosen['price']),
      hasToppings = this.props.chosen.hasOwnProperty("toppings"),
      selectedToppings = "",
      displayToppings = "";

    if (hasToppings) {
      var toppings = this.props.toppings,
        delTopping = this.handleDeleteTopping;
      selectedToppings = (
        <ul>
          {toppings.map(function(topping, idx) {
            price += parseFloat(topping.price);
            return <li key={idx}>{topping.name}&nbsp;<a onClick={delTopping.bind(null, idx)}>&times;</a></li>
          })}
        </ul>
      );
      displayToppings = <div className="toppings">
        <span className="pull-right"><a onClick={this.props.clickTopping} className="btn btn-success">I WANT SOMETHING ON TOP</a></span>
        {selectedToppings}
      </div>
    }

    price = price.toFixed(2);
    return (
      <div className="row">
        <div className="col-md-12">
          <h3>MAIN <small>GET SOME FOOD IN YOU!</small></h3>
          <p>YOU SHOULD HAVE:</p>
          <h2>{this.props.chosen['name']} <span className="pull-right">£{price}</span></h2>
          <p className="pull-right">
            <a onClick={this.props.clickMain} className="btn btn-primary">I DON'T LIKE THAT</a>
          </p>
          {displayToppings}
        </div>
      </div>
    )
  }
});

module.exports = MainItem;
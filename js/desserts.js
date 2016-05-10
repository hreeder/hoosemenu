var React = require('react');

var DessertItem = React.createClass({
  render: function() {
    if (this.props.chosen['name']) {
      var price = "£" + this.props.chosen['price'].toFixed(2);
    }
    return (
      <div className="row">
        <div className="col-md-12">
          <h3>DESSERT <small>YOU WANT SUGAR WITH THAT?</small></h3>
          <p>YOU SHOULD HAVE:</p>
          <h2>{this.props.chosen['name']} <span className="pull-right">{price}</span></h2>
          <p className="pull-right">
            <a onClick={this.props.clickDessert} className="btn btn-info">GIMME SOME SUGAR</a>
          </p>
        </div>
      </div>
    )
  }
});

module.exports = DessertItem;
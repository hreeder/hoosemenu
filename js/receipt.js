/**
 * Created by skull on 11/05/16.
 */
var React = require('react');
require('../sass/modules/receipt.scss');

var ReceiptEntry = React.createClass({
  render: function() {
    var price = this.props.item.price.toFixed(2);
    return (
      <p style={this.props.idt}>
        {this.props.item.name}
        <span className="pull-right">£{price}</span>
      </p>
    )
  }
});

var Receipt = React.createClass({
  render: function() {
    var totalPrice = parseFloat(this.props.main.price);
    var toppings = this.props.toppings.map(function(item, idx) {
      totalPrice += parseFloat(item.price);
      return (
        <ReceiptEntry item={item} idt={{paddingLeft: '1em'}} key={idx}></ReceiptEntry>
      )
    });

    var dessert = "";
    if (this.props.dessert.name != "") {
      dessert = (<ReceiptEntry item={this.props.dessert} idt={{paddingLeft: 'auto'}}></ReceiptEntry>);
      totalPrice += this.props.dessert.price;
    }
    totalPrice = totalPrice.toFixed(2);
    return (
      <div id="receipt-block">
        <ReceiptEntry item={this.props.main} idt={{paddingLeft: 'auto'}}></ReceiptEntry>
        {toppings}
        {dessert}
        <hr style={{width: '75%'}} />
        <p>Total <span className="pull-right">£{totalPrice}</span></p>
      </div>
    )
  }
});

module.exports = Receipt;
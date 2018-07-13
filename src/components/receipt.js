import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import './receipt.css';

class ReceiptEntry extends Component {
  render() {
    var price = this.props.item.price.toFixed(2);
    return (
      <p style={this.props.indent}>
        {this.props.item.name}
        <span className="pull-right">£{price}</span>
      </p>
    )
  }
}

class Receipt extends Component{
  render() {
    var totalPrice = parseFloat(this.props.tab.main.price);
    var toppings = this.props.tab.toppings.map(function(item, idx) {
      totalPrice += parseFloat(item.price);
      return (
        <ReceiptEntry
          item={item}
          indent={{paddingLeft: '1em'}}
          key={idx} />
      )
    });

    var dessert = "";
    if (this.props.tab.dessert !== null) {
      dessert = <ReceiptEntry item={this.props.tab.dessert} indent={{paddingLeft: 'auto'}} />
      totalPrice += this.props.tab.dessert.price;
    }
    totalPrice = totalPrice.toFixed(2);
    return (
      <div id="receipt-block">
        <ReceiptEntry
          item={this.props.tab.main}
          indent={{paddingLeft: 'auto'}} />
        {toppings}
        {dessert}
        <hr style={{width: '75%'}} />
        <p>Total <span className="pull-right">£{totalPrice}</span></p>
      </div>
    )
  }
}

export default connect((store) => {
  return {
    tab: store.tab
  }
}, (dispatch) => bindActionCreators({}, dispatch))(Receipt);
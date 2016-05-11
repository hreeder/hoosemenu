var React = require('react');

var OptionsPanel = React.createClass({
  updateNone: function(e) {
    var opts = this.props.opts;
    opts['none'] = e.currentTarget.value === "on" ? true : false;
    opts['diet'] = "none";
    this.props.update(opts);
  },
  updateMeat: function(e) {
    var opts = this.props.opts;
    opts['meat'] = e.currentTarget.value === "on" ? true : false;
    opts['diet'] = "meat";
    this.props.update(opts);
  },
  updateVeggie: function(e) {
    var opts = this.props.opts;
    opts['veggie'] = e.currentTarget.value === "on" ? true : false;
    opts['diet'] = "veggie";
    this.props.update(opts);
  },
  updateVegan: function(e) {
    var opts = this.props.opts;
    opts['vegan'] = e.currentTarget.value === "on" ? true : false;
    opts['diet'] = "vegan";
    this.props.update(opts);
  },
  render: function() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="radio">
            <label>
              <input type="radio" name="options" id="optionsNone" onChange={this.updateNone} defaultChecked={true} /> &lt;None&gt;
            </label>
            <br/>
            <label>
              <input type="radio" name="options" id="optionsMeat" onChange={this.updateMeat} /> MEAT IS LOVE, MEAT IS LIFE
            </label>
            <br/>
            <label>
              <input type="radio" name="options" id="optionsVeggie" onChange={this.updateVeggie} /> I DON'T WANT MEAT
            </label>
            <br/>
            <label>
              <input type="radio" name="options" id="optionsVegan" onChange={this.updateVegan} /> I DON'T WANT ANY ANIMAL PRODUCTS
            </label>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = OptionsPanel;
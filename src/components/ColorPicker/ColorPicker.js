import React, { Component } from "react";
import "./ColorPicker.css";

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };

  render() {
    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <div>
          {this.props.options.map(({ label, color }) => (
            <button
              key={label}
              className="ColorPicker__option"
              style={{ backgroundColor: color }}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

// render() {
// const { activeOptionIdx } = this.state;
// const { options } = this.props;
// const { label } = options[activeOptionIdx];

export default ColorPicker;

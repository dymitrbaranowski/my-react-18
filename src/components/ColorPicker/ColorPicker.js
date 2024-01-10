import React, { Component } from "react";
import "./ColorPicker.css";

class ColorPicker = ({options})=> (
  // render() {
    // const { activeOptionIdx } = this.state;
    // const { options } = this.props;
    // const { label } = options[activeOptionIdx];
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <div>
          {options.map(({ label, color }) => (
            <span
              key={label}
              className="ColorPicker__option"
              style={{ backgroundColor: color }}
            ></span>
          ))}
        </div>
      </div>
 );



export default ColorPicker;

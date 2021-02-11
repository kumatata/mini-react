import { type_check } from "../lib/string.js";
import { React } from "../lib/react.js";
import { Component } from "./../lib/component.js";

export class TickComponent extends Component {
  constructor(properties) {
    super(properties);
    setInterval(this.tick, properties.interval);
    if (this.specs) type_check(properties, this.specs);
  }

  render = () => {
    const result = React.createElement(
      "div",
      {
        class: "container text-center",
        style: "border-radius: 10px; border-style: outset;"
      },
      React.createElement(
        "h1",
        { class: "icecub", id: "horloge" },
        `${this.state.ticker == null
          ? new Date().toLocaleTimeString()
          : this.state.ticker
        }`
      )
    );

    return result;
  };

  tick = () => {
    const time = new Date().toLocaleTimeString();
    this.setState({ ticker: time });
  };

  specs = {
    properties: {
      interval: { type: "number" }
    }
  };
}

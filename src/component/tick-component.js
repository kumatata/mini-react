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
    const event = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    //console.log(event.toLocaleDateString(undefined, options));

    const result = React.createElement(
      "div",
      {
        class: "horloge",
        style: "border-radius: 10px; border-style: outset;"
      },
      React.createElement(
        "h2",
        { class: "date", id: "horloge" },
        `Date : ${event.toLocaleDateString(undefined, options)}`
      ),
      React.createElement(
        "h2",
        { class: "heure", id: "horloge" },
        `Heure : ${this.state.ticker == null
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

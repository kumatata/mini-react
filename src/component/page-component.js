import { React } from "../lib/react.js";
import { Component } from "./../lib/component.js";

export class PageComponent extends Component {
  constructor(properties) {
    super(properties);
  }

  render = () => {
    const result = React.createElement("div", { id: "main" },
      React.createElement("div", { id: "header" }, ""),
      React.createElement("div", { id: "content" }, "")
    );
    return result;
  };
}

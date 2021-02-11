import { React } from "../lib/react.js";
import { Component } from "./../lib/component.js";

export class ErrorNotFoundComponent extends Component {
  constructor(properties) {
    super(properties);
  }

  render = () => {
    const result = React.createElement(
      "div",
      { class: "danger" },
      `Error 404 : Not Found (url : ${window.location.pathname})`
    );
    return result;
  };
}

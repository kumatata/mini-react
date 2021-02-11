import { React } from "../lib/react.js";
import { Component } from "./../lib/component.js";

export class ErrorNotFoundComponent extends Component {
  constructor(properties) {
    super(properties);
  }

  render = () => {
    const result = React.createElement(
      "h2",
      { class: "error text-center" },
      `Error 404 : Not Found (url : ${window.location.pathname})`
    );
    return result;
  };
}

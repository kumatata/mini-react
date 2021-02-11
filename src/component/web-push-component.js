import { React } from "../lib/react.js";
import { Component } from "./../lib/component.js";

  export class WebPushComponent extends Component {
    constructor(properties) {
      super(properties);
    }

  
    render = () => {

    const result = React.createElement(
        "p",
        {
          class: "p",
          style: "align-items:center"
        },
        React.createElement("button", { id: "divPush", disabled: true, class: "js-push-btn mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" }, "Activer le push")
      );
      return result;
    };

  }
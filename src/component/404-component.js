import { React } from "../lib/react.js";
import { Component } from "./../lib/component.js";

export class ErrorNotFoundComponent extends Component {
  constructor(properties) {
    super(properties);
  }

  render = () => {
    const result = React.createElement(
<<<<<<< HEAD
<<<<<<< HEAD
      "h2",
      { class: "container text-center" },
=======
      "div",
      { class: "danger" },
>>>>>>> 577002187c1c5bf02f91e4e0b61bd61833f66444
=======
      "div",
      { class: "danger" },
>>>>>>> dev
      `Error 404 : Not Found (url : ${window.location.pathname})`
    );
    return result;
  };
}

import { React } from "../lib/react.js";
import { Component } from "../lib/component.js";

export class InputFileComponent extends Component {
  constructor(properties) {
    super(properties);
  }

  displayAlert() {
    var reader = new FileReader();
    reader.readAsText(document.getElementById("fileInput").files[0], "utf-8");
    reader.onload = function (e) {
      alert(reader.result);
    };
  }

  render() {
    const result = React.createElement(
      "card",
      {
        class: "container",
        style: "margin-top: 400px;"
      },
      React.createElement(
        "input",
        { type: "file", id: "fileInput", onchange: this.displayAlert },
        ""
      )
    );
    return result;
  }
}

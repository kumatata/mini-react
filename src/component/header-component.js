import { prop_access } from "../lib/string.js";
import { React } from "../lib/react.js";
import { Component } from "./../lib/component.js";

export class HeaderComponent extends Component {

  constructor(properties) {
    super(properties);
    this.bodyTitle = "projet mini react ".ucfirst();
    this.routes = prop_access(properties.router, "routes");
    this.selectedLink = window.location.pathname;
  }

  // Fonction de rendu
  render = () => {
    // Recup
    console.log("location path : " + this.selectedLink);

    // Construction des liens
    var routeHome = this.routes.filter(function (r) {
      return r.getId() === "home";
    })[0];
    var routeFile = this.routes.filter(function (r) {
      return r.getId() === "file";
    })[0];
    var routeBattery = this.routes.filter(function (r) {
      return r.getId() === "battery";
    })[0];

    // Creation de l'arboresence
    const result = React.createElement(
      "div",
      {
        class: "page-header",
        style: "test-center;"
      },
      React.createElement(
        "nav",
        null,
        React.createElement(
          "a",
          {
            class: routeHome.getClassName(),
            id: routeHome.getId(),
            href: "." + routeHome.getPath(),
            style:
              this.selectedLink === routeHome.getPath()
                ? "text-decoration: underline; color: red;"
                : ""
          },
          routeHome.getName()
        ),
        React.createElement(
          "a",
          {
            class: routeFile.getClassName(),
            id: routeFile.getId(),
            href: "." + routeFile.getPath(),
            style:
              this.selectedLink === routeFile.getPath()
                ? "text-decoration: underline; color: red;"
                : ""
          },
          routeFile.getName()
        ),
        React.createElement(
          "a",
          {
            class: routeBattery.getClassName(),
            id: routeBattery.getId(),
            href: "." + routeBattery.getPath(),
            style:
              this.selectedLink === routeBattery.getPath()
                ? "text-decoration: underline; color: red;"
                : ""
          },
          routeBattery.getName()
        )
      ),
      React.createElement("h2", null, `${this.bodyTitle}`),
      React.createElement("ul", null,
        React.createElement("li", null, "Contenu du site"),
        React.createElement("ul", null,
          React.createElement("li", null, "Home : affiche la date et l'heure "),
          React.createElement("li", null, "File : permet d'importer un fichier "),
          React.createElement("li", null, "Battery : permet d'avoir des infos sur la baterie"),
        ),
        React.createElement("li", null, "Roure inconue : nous renvoi error 404"),
      )
    );

    return result;
  };
}

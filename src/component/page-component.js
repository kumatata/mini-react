import { React } from "../lib/react.js";
import { Component } from "./../lib/component.js";

export class PageComponent extends Component {
  constructor(properties) {
    super(properties);
    this.bodyTitle = "mini-react".ucfirst();

  }

  render = () => {
    const result = React.createElement("div", { id: "main" },
      React.createElement("div", { id: "header" }, ""),
      React.createElement("div", { id: "content" },
      React.createElement("h2", {class: "text-center"}, `${this.bodyTitle}`),	
      React.createElement("ul", {class: "text-left ul-contenu"},	
        React.createElement("li", null, "Contenu du site"),	
        React.createElement("ul", null,	
          React.createElement("li", null, "Home : affiche la date et l'heure "),
          React.createElement("li", null, "Push : envoie une notification dans le navigateur (outil: WebServer for Chrome) "),		
          React.createElement("li", null, "File : permet d'importer un fichier "),	
          React.createElement("li", null, "Battery : permet d'avoir des infos sur la baterie"),	
        ),	
        React.createElement("li", null, "Route inconue : nous renvoie erreur 404"),
    ))
    );
    return result;
  };
}

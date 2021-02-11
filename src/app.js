import { ReactDOM } from "./lib/react.js";
import { router, route } from "./lib/routing.js";
import { TickComponent } from "./component/tick-component.js";
import { HeaderComponent } from "./component/header-component.js";
import { PageComponent } from "./component/page-component.js";
import { ErrorNotFoundComponent } from "./component/404-component.js";
import { InputFileComponent } from "./component/input-file-component.js";
import { BatteryManagerComponent } from "./component/battery-manager-component.js";
import { WebPushComponent } from "./component/web-push-component.js";


// Initialisation de l'arboresence
ReactDOM.render(PageComponent, document.getElementById("root"), {});
ReactDOM.render(HeaderComponent, document.getElementById("header"), {
  router // Je me sers du routeur pour crée mon composant
});


// Detecte si l'initialisation de l'arboresence c'est bien effectué
var promise = new Promise(function (resolve, reject) {
  // Récuperation du content
  var contentElement = document.getElementById("content");

  // On vérifie qu'on a bien un content dans le DOM pour permettre au React de fonctionner
  if (contentElement)
    resolve("Ah super ! content element a été trouvé !");
  else
    reject(
      Error(
        "Ohlala content element pas trouvé ! "
      )
    );
});

promise.then(
  function (result) {
    var contentElement = document.getElementById("content");
    console.log(result);
    // Affichage en fonction de la route
    switch (!route ? null : route.getId()) {
      case "home":
        // Si on est sur la route home
        //console.log("home :" + route.getId());
        ReactDOM.render(TickComponent, contentElement, {
          interval: 1000
        });
        break;

      case "push":
        // Si on est sur la route file
        ReactDOM.render(WebPushComponent, contentElement, {});
        break;

      case "file":
        // Si on est sur la route file
        ReactDOM.render(InputFileComponent, contentElement, {});
        break;

      case "battery":
        // Si on est sur la route battery
        ReactDOM.render(BatteryManagerComponent, contentElement, {});
        break;

      default:
        console.log("Error root not found");
        // Si la route est incorrect
        ReactDOM.render(ErrorNotFoundComponent, contentElement, {});
        break;
    }
  },
  function (err) {
    console.log(err);
  }
);

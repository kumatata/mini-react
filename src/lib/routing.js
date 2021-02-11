class Router {

  name = null;
  routes = null;

  constructor(name, routes) {
    this.name = name;
    this.routes = routes;
  }

  getName = () => {
    return this.name;
  };

  getRoutes = () => {
    return this.routes;
  };
}

class Route {

  name = null;
  id = null;
  path = null;
  className = null;

  constructor(name, id, path, className) {
    this.name = name;
    this.id = id;
    this.path = path;
    this.className = className;
  }

  getName = () => {
    return this.name;
  };

  getId = () => {
    return this.id;
  };

  getPath = () => {
    return this.path;
  };

  getClassName = () => {
    return this.className;
  };

  getLinkElement = () => {
    return this.path;
  };
}

// Creation du routeur
export var router = new Router("mainRouter", [
  new Route("Home", "home", "/", "link color-blue"),
  new Route("File", "file", "/file", "link color-blue"),
  new Route("Battery", "battery", "/battery", "link color-blue"),
]);

// Prend la route courrante
export var route = router.routes.filter(function (r) {
  console.log("liste des routes : " + r.getPath());
  return r.getPath() === window.location.pathname;
})[0];

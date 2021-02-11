import { isStateLessComponent } from "./string.js";
import { Component } from "./component.js";

// AnElement
function anElement(element, properties, children) {
  if (element.isClass()) {
    const component = new Component(properties);
    return component.render();
  } else if (isStateLessComponent(element)) {
    return Component(properties);
  } else {
    const anElement = document.createElement(element);
    children.forEach(child => {
      if (typeof child === "object") {
        anElement.appendChild(child);
      } else {
        anElement.textContent += child;
      }
    });
    if (properties != null) {
      Object.keys(properties).forEach(propertyName => {
        if (/^on.*$/.test(propertyName)) {
          anElement.addEventListener(
            propertyName.substring(2).toLowerCase(),
            properties[propertyName]
          );
        } else {
          anElement.setAttribute(propertyName, properties[propertyName]);
        }
      });
    }
    return anElement;
  }
}

//Paramètres du reste, permet de représenter un nombre indéfini d'arguments sous forme d'un tableau
export const createElement = (element, properties, ...children) => {
  return anElement(element, properties, children);
};

// Permet d'exposer la classe
export const React = {
  createElement,
  Component
};

// Expose la méthode render
export const ReactDOM = {
  render: (element, domElement, properties = {}) => {
    var prevChild = null;
    var el = new element(properties);
    var prevChild = el.display();

    el.componentDidUpdate = () => {
      var child = el.display();
      domElement.replaceChild(child, prevChild);
      prevChild = child;
    };
    domElement.appendChild(prevChild);
  }
};

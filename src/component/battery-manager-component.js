import { type_check } from "../lib/string.js";
import { React } from "../lib/react.js";
import { Component } from "./../lib/component.js";

export class BatteryManagerComponent extends Component {

    constructor(properties) {
        super(properties);
    }

    render() {
        const result = React.createElement(
            "div",
            {
                class: "battery"
                //style: "margin-top: 400px;"
            },
            React.createElement(
                "button",
                { class: "btn" },
                React.createElement("i", { class: "fa fa-home" }, "Informations sur la batterie")
            ),
            // React.createElement(
            //     "h3",
            //     { type: "text" },
            //     "Battery informations"
            // ),
            React.createElement(
                "p",
                { type: "text", id: "level" },
                `${this.testingBattery()}`
            ),
            React.createElement(
                "p",
                { type: "text", id: "charging" },
                `${this.testingBattery()}`
            ),
            React.createElement(
                "p",
                { type: "text", id: "dischargingTime" },
                `${this.testingBattery()}`
            ),
            // React.createElement(
            //     "p",
            //     { type: "text", id: "chargingTime" },
            //     `${this.testingBattery()}`
            // ),

        );
        return result;
    }

    testingBattery() {

        var battery = navigator.battery || navigator.webkitBattery || navigator.mozBattery;


        function logBattery(battery) {
            console.log(battery.level);
            document.querySelector('#level').textContent = "Niveau de la batterie : " + battery.level * 100 + " %";
            console.log(battery.charging);
            console.log(battery.dischargingTime);
            document.querySelector('#charging').textContent = "Battery en charge ? " + (battery.charging ? "Oui" : "Non");
            // document.querySelector('#chargingTime').textContent = "Temps avant charge de la batterie: "
            //     + battery.chargingTime + " secondes";
            document.querySelector('#dischargingTime').textContent = battery.dischargingTime / 60;

            battery.addEventListener('chargingchange', function () {
                //console.log('Battery chargingchange event: ' + battery.charging);
            }, false);
        }

        if (navigator.getBattery) {
            // navigator.getBattery().then(logBattery).then((data) => {
            //     console.log("data " + data);
            // });
            return navigator.getBattery().then(logBattery);
        } else if (battery) {
            return logBattery(battery);

        }
    }
}

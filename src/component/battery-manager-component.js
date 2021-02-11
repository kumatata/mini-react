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
                class: "batery"
                //style: "margin-top: 400px;"
            },
            React.createElement(
                "h3",
                { type: "text" },
                "Battery level"
            ),
            React.createElement(
                "p",
                { type: "text" },
                `${this.testingBattery()}`
            )
        );
        return result;
    }


    levelBattery() {

        navigator.getBattery().then(function (battery) {

            var level = battery.level;
            console.log(battery.level);
            return level;
            //document.querySelector('#level').textContent = level;
        });
    }

    newTest() {
        let batteryPromise = navigator.getBattery();
        batteryPromise.then(batteryCallback);

        function batteryCallback(batteryObject) {
            return printBatteryStatus(batteryObject);
        }
        function printBatteryStatus(batteryObject) {
            //console.log("IsCharging", batteryObject.charging);
            //console.log("Percentage", batteryObject.level);
            return batteryObject.level;

            console.log("charging Time", batteryObject.chargingTime);
            console.log("DisCharging Time", batteryObject.dischargingTime);
        }
    }

    charging() {
        navigator.getBattery().then((battery) => {

            battery.ondischargingtimechange = (event) => {
                console.warn(`Discharging : `, event.target.level)
                return event.target.level;
            };

            // battery.onchargingtimechange = (event) => {
            //     console.info(`Charging : `, event.target.level);
            // };
        });
    }

    testingBattery() {

        var battery = navigator.battery || navigator.webkitBattery || navigator.mozBattery;


        function logBattery(battery) {
            //this.levelBattery = battery.level;
            console.log(battery.level);
            console.log(battery.charging);
            //console.log(dischargingTime);

            battery.addEventListener('chargingchange', function () {
                //console.log('Battery chargingchange event: ' + battery.charging);
            }, false);
        }

        if (navigator.getBattery) {
            navigator.getBattery().then(logBattery);
            console.log(navigator.getBattery().then(logBattery.level));
            return navigator.getBattery().then(logBattery);
        } else if (battery) {
            return logBattery(battery);

        }
    }

    // getLevelBattery() {
    //     return this.levelBattery;
    // }

}

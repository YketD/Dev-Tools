import { bg } from "./cc-loader";
import { colorbutton } from "./cc-loader";

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

colorbutton.on("click", function () {
    bg.css("background-color", getRandomColor())
});
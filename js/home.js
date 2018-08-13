/* global menu */
"use strict";

var home = (function () {
    var showHome = function () {
        window.mainContainer.innerHTML = "";

        var title = document.createElement("h1");

        title.className = "title";
        title.textContent = "G-instamanager";

        var greeting = document.createElement("p");
        var timeOfDayGreeting = "Hi";
        var now = new Date();

        if (now.getHours() <= 10) {
            timeOfDayGreeting = "Good morning";
        } else if (now.getHours() >= 17) {
            timeOfDayGreeting = "Good evening";
        }

        greeting.textContent = timeOfDayGreeting +
            ", this is Mr Gmiak.dv, programmer-developer and CS student. ";

        var image = document.createElement("img");
        image.className = "me";

        image.src = "img/gmk.jpg";
        image.alt = "Emil Folino";

        window.mainContainer.appendChild(title);
        window.mainContainer.appendChild(greeting);
        window.mainContainer.appendChild(image);

        window.rootElement.appendChild(window.mainContainer);

        menu.showMenu("home");
    };

    return {
        showHome: showHome
    };
})(home);

/* global home, about, github, presentation */

"use strict";

var menu = (function () {
    var showMenu = function (selected) {
        window.navigation.innerHTML = "";

        var navElements = [{name: "Home", class: "home", nav: home.showHome},
            {name: "About", class: "free_breakfast", nav: about.showAbout},
            {name: "Followers", class: "folder", nav: github.showGithub},
            {name: "Following", class: "people", nav: presentation.showPresentation}];

        navElements.forEach(function (element) {
            var navElement = document.createElement("a");

            if (selected === element.class) {
                navElement.className = "active";
            }

            navElement.addEventListener("click", element.nav);

            var icon = document.createElement("i");

            icon.className = "material-icons";
            icon.textContent = element.class;
            navElement.appendChild(icon);

            var text = document.createElement("span");

            text.className = "icon-text";
            text.textContent = element.name;
            navElement.appendChild(text);

            window.navigation.appendChild(navElement);
        });

        window.rootElement.appendChild(window.navigation);
    };

    return {
        showMenu: showMenu
    };
})(menu);

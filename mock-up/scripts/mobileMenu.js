var burger = document.querySelector(".menu-button");
var menu = document.querySelector(".menu-popup");
var toggleState = function(menu, open, closed) {
    menu.dataset.state = menu.dataset.state === open ? closed : open;
};

burger.onclick = function () {
    toggleState(menu, "closed", "open");
};
document.addEventListener("DOMContentLoaded", function () {
    const icon = document.querySelector(".menubar");
    const navMenu = document.querySelector(".navbar");

    icon.addEventListener("click", function (event) {
        event.stopPropagation();
        navMenu.classList.toggle("open");
        icon.classList.toggle("open");
    });

    document.addEventListener("click", function (event) {
        if (navMenu.classList.contains("open") && !navMenu.contains(event.target) && event.target !== icon) {
            navMenu.classList.remove("open");
            icon.classList.remove("open");
        }
    });

    window.addEventListener("scroll", function () {
        if (navMenu.classList.contains("open")) {
            navMenu.classList.remove("open");
            icon.classList.remove("open");
        }
    });
});

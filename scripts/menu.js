document.addEventListener("DOMContentLoaded", function () {
    const icon = document.querySelector(".menu");
    const header = document.querySelector(".navbar span");

    icon.addEventListener("click", function (event) {
        event.stopPropagation();
        header.classList.toggle("open");
        icon.classList.toggle("open");
    });

    document.addEventListener("click", function (event) {
        if (header.classList.contains("open") && !header.contains(event.target) && event.target !== icon) {
            header.classList.remove("open");
            icon.classList.remove("open");
        }
    });

    window.addEventListener("scroll", function () {
        if (header.classList.contains("open")) {
            navMenu.classList.remove("open");
            icon.classList.remove("open");
        }
    });
});

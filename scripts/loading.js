document.documentElement.classList.add("no-scroll");

window.addEventListener("load", () => {
  const loading = document.getElementById("loading");
  const header = document.querySelector("header");

  const bgImage = getComputedStyle(document.querySelector('.about-photo .img')).backgroundImage;

  const imageUrl = bgImage.slice(5, -2);

  const img = new Image();
  img.src = imageUrl;

  img.onload = () => {
    loading.style.opacity = "0";

    setTimeout(() => {
      loading.style.display = "none";
      header.style.opacity = "1";
      header.style.pointerEvents = "auto";
      document.documentElement.classList.remove("no-scroll");

    }, 700);
  };
});